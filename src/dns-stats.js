const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsObj = {};

  for(let i =0; i<domains.length; i++) {
    let domainPart = domains[i].split('.').reverse();
    console.log(domainPart);
    
    let string='';
    for(let j=0; j<domainPart.length; j++) {
      string += '.' +domainPart[j];
      console.log(string);
      if(domainsObj.hasOwnProperty(string)) {
        domainsObj[string] +=1;
      } else {
         domainsObj[string] = 1;
      }
    }
  }
  
  return domainsObj;
}

module.exports = {
  getDNSStats
};
