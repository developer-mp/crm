import { createLogger, transports, format } from "winston";
import config from "../config.json" assert { type: "json" };
//import appRoot from "app-root-path";

const options = config.logger;
// const file = { ...options.file, filename: `${appRoot.path}/logs/app.log` };
// const errorfile = {
//   ...options.errorfile,
//   filename: `${appRoot.path}/logs/error.log`,
// };
// const exceptionFile = { filename: `${appRoot.path}/logs/exception.log` };

const logger = createLogger({
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.File(options.file),
    new transports.File(options.errorfile),
    new transports.File(options.console),
  ],
  exceptionHandlers: [new transports.File(options.exceptionfile)],
  exitError: false,
});

logger.stream = {
  write(message, encoding) {
    logger.info(message);
  },
};

export default logger;
