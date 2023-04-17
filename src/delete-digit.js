const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  console.log(n);
  let max = 0;
  n = n.toString().split('');
  console.log(n);
  for(let i = 0; i < n.length; i++) {
    let excluded = Number(n.filter((el, index) => i !== index).join(''));
    if(max < excluded) {
      max = excluded;
    }
  }
  console.log(max);
  return max;
}

module.exports = {
  deleteDigit
};
