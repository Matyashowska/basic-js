const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let strArr = [];
  let obj = options;
  let newString = (str === null) ? 'null' : str.toString();
  if(obj.addition) {
    obj.addition = (obj.addition === null) ? 'null' : obj.addition.toString();
  }

  let addition = obj.addition;
 
  if(!obj.separator) {
    obj.separator = '+';
  }
  if(!obj.additionSeparator) {
    obj.additionSeparator = '|';
  }

  if(!obj.repeatTimes) {
    return str + addition;
  }

  for(let i=0; i<obj.repeatTimes; i++) {
    for(let j=0; j<obj.additionRepeatTimes; j++) {
      if(j+1 === obj.additionRepeatTimes) {
         newString += addition;
      } else {
        newString += addition + obj.additionSeparator;
      }
    }
    strArr.push(newString);
    newString = str;
    
  }
  
  //array1.fill(6));
  //str.fill(str);
  return strArr.join(obj.separator);
}

module.exports = {
  repeater
};
