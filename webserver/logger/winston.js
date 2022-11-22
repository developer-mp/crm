// import { createLogger, transports, format } from "winston";
// import logger from "../config.json" assert { type: "json" };

// const options = logger;

// const errorLogger = createLogger({
//   format: format.combine(format.timestamp(), format.json()),
//   transports: [
//     new transports.File(options.file),
//     new transports.File(options.errorfile),
//     new transports.File(options.console),
//   ],
//   exceptionHandlers: [new transports.File(options.exceptionfile)],
//   exitError: false,
// });

// errorLogger.stream = {
//   write(message, encoding) {
//     errorLogger.info(message);
//   },
// };

// export default errorLogger;
