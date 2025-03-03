const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let sum = 1;
  let encodedString = '';
  for(let i = 0; i<str.length; i++) {
    if(str[i] === str[i+1]) {
      sum += 1;
    } else {
      if(sum === 1) {
        encodedString += str[i];
      } else {
        encodedString += sum + str[i];
      }
      sum = 1;
    }
  }
      
      console.log(encodedString);
      return encodedString;
}

module.exports = {
  encodeLine
};
