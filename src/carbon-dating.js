const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if(typeof(sampleActivity) !== 'string' || !sampleActivity || isNaN(parseFloat(sampleActivity)) || Number(sampleActivity) === 0) {
    return false;
  } else {
      sampleActivity = Number(sampleActivity);
      const DACAY_RATIO = 15;
      const HALF_LIFE = 0.693/5730;
      let age = Math.ceil(Math.log(DACAY_RATIO/sampleActivity)/HALF_LIFE);
      return (age > 0) ? age : false;     
  }
}

module.exports = {
  dateSample
};
