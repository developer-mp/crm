const _ = require("lodash");
const webmessage = require("../../data/ref/webmessage.json");
const appmessage = require("../../data/ref/appmessage/json");

class MessageHandler {
  static getWebMessage(code) {
    const { data } = webmessage;
    let item = _.find(data, { code });
    if (item === undefined) {
      item = _.find(data, { code: 0 });
    }
    return item.text;
  }

  static getAppMessage(code, endpoint, message, arr) {
    const { data } = appmessage;
    let result = this.getWebMessage(1);
    let isPassthru = false;
    let item = _.find(data, { code, endpoint });
    if (item === undefined) {
      item = _.find(data, { code, endpoint: "All" });
    }
    if (item === undefined) {
      item = _.find(data, { code: 0, endpoint: "All" });
    }
    if (item !== undefined) {
      result = item.passthru ? message : item.text;
      isPassthru = item.passthru;
    }
    const obj = { result, isPassthru };
    return { uiMessage: result, isPassthru };
  }
}

export default MessageHandler;
