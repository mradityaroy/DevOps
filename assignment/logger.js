// const winston = require('winston');

// const logger = winston.createLogger();




const winston = require('winston');

const logger = winston.createLogger({
  error: 'An error occured',
  level: 'info'
});
module.exports = logger;

