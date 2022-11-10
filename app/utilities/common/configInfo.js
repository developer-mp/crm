import config from "../../config.json" assert { type: "json" };

class ConfigInfo {
  static pgConnection() {
    return {
      user: config.pgServer.user,
      password: config.pgServer.password,
      database: "console",
      host: config.pgServer.host,
      port: config.pgServer.port,
    };
  }
}

export default ConfigInfo;
