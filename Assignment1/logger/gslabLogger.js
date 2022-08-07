const winston = require('winston');
const gslabLogger = () => {

    return winston.createLogger({
      level: 'error',
      format: winston.format.json(),
      transports: [

        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
      ],
    });
}

module.exports = gslabLogger;