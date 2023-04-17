const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let domainIndex = email.lastIndexOf('@') + 1;
  let domain = email.slice(domainIndex);
  return domain;
}

module.exports = {
  getEmailDomain
};
