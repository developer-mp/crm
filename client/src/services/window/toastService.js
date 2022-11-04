import { toast as toastify } from "react-toastify";
import { lodash as _ } from "lodash";

export const toast = (messages, options) => {
  if (_.isArray(messages)) {
    _.forEach(messages, (message) => toastify(message, options));
  } else {
    toastify(messages, options);
  }
};
