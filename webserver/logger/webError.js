import pkg from "lodash";
const { map } = pkg;
const messageHandler = require("../utilities/user/messageHandler");
const logger = require("./winston");

class WebError {
  static createError(message, type, arr = null) {
    const error = new Error();
    error.name = type;
    error.message = arr || message;
    return error;
  }

  static UnauthorizedError(message) {
    return this.createError(message, "Unauthorized");
  }

  static ForbiddenError(message) {
    return this.createError(message, "Forbidden");
  }

  static ServerError(message) {
    logger.error(message);
    return this.createError(message, "Server");
  }

  static ServerValidationError(code) {
    const message = messageHandler.getWebMessage(code);
    logger.error(message);
    return this.createError(message, "WebServer");
  }

  static AppServerError(appError, endpoint, data) {
    const { message, code, errors } = appError;
    const json = JSON.stringify({ code, message, endpoint, data, errors });
    logger.error(json);
    const msgObj = messageHandler.getAppMessage(
      code,
      endpoint,
      message,
      errors
    );
    const { uiMessage, isPassthru } = msgObj;
    const arrError = this.getErrorArr(errors, isPassthru, endpoint);
    return this.createError(uiMessage, "AppServer", arrError);
  }

  static getErrorArr(errors, isPassthru, endpoint) {
    if (!isPassthru) return null;
    const list =
      errors && map(errors, (item) => `${item.Keyword} ${item.Value}`);
    return list;
  }

  static saveAppServerError(appError, endpoint, data) {
    const { message, code, errors } = appError;
    const json = JSON.stringify({ code, message, endpoint, data, errors });
    logger.error(json);
  }
}

module.exports = WebError;
