const logger = require('../../assignment/logger');
const gslabLogger = require('./gslabLogger');
const prompt = require('prompt-sync')();

const x = prompt("Enter num 1 ");
const y = prompt("Enter num 2 ");

var mathdiv=(x,y,callback)=>{
  setTimeout(()=>{
    let logger=null;
    logger=gslabLogger();
    if(y==0){
      logger.error("Denominator can't be zero");
    }
    else {
      callback(x/y);
    }
    module.exports=logger;
  },2000);
}

mathdiv(x,y,(ans)=>{
  console.log(ans)
});

