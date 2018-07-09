// The intent of this file is to reverse
// the string using built in functions.
const reverse = (text) => {
  const reversestr = text.split('').reverse().join('');
  return reversestr;
};

module.exports = reverse;
