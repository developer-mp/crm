const { createLogger, transports, format } = require("winston");
const config = require("../config");

const options = config.logger;

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

module.exports = logger;
