const logger = require('./logger');
function xyz(info,level){
    logger.info(info,level)
};
xyz('Running','info');
// logger.info('App is in running mode');
// logger.error('An error occured');