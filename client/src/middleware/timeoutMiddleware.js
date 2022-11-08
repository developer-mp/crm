import { lodash as _ } from "lodash";
import { setTimeoutId } from "../actions/timeout";
import { getTimeout } from "../reducers";
import UserService from "../services/userService";
import config from "../config";

const TIMEOUT = config.timeout;
export default ({ getState, dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === RESET_TIMEOUT || _.endsWith(action.type, "RECEIVED")) {
      const exisitngTimeoutId = getTimeoutId(getState());
      if (exisitngTimeoutId) {
        clearTimeout(exisitngTimeoutId);
      }

      const timeout = new Date().getTime() + TIMEOUT * 1000;

      const timeoutId = setTimeout(() => {
        UserService.logoff(true);
      }, TIMEOUT * 1000);
      dispatch(setTimeoutId(timeout, timeoutId));
      UserService.updateExpiration(timeout / 1000);
    }
    return next(action);
  };
