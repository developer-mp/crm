import SessionService from "./sessionService.js";
import {
  loginReceived,
  userTimeout,
  changePasswordReceived,
  temporaryPasswordSent,
  changeSecurityQuestionsReceived,
} from "../../actions/user";
import { browserResize } from "../../actions/window";

class StoreService {
  static initializeLogin(store) {
    const token = SessionService.getToken();
    const isExpired = SessionService.isTokenExpired();

    if (token && !isExpired) {
      store.dispatch(loginReceived());
    } else if (isExpired) {
      store.dispatch(userTimeout());
      SessionService.removeToken();
    }

    if (SessionService.getPasswordChanged() === "true") {
      store.dispatch(changePasswordReceived());
    }

    if (SessionService.getTemporaryPasswordSent() === "true") {
      store.dispatch(temporaryPasswordSent());
      SessionService.setTemporaryPasswordSent(false);
    }
    if (SessionService.getSecurityQuestionsUpdated() === "true") {
      store.dispatch(changeSecurityQuestionsReceived(true));
      SessionService.setSecurityQuestionsUpdated(false);
    }
  }

  static registerBrowserResize(store) {
    window.onresize = () => {
      store.dispatch(browserResize());
    };
  }
}

export default StoreService;
