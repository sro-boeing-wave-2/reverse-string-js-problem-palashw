// The intent of this file is to reverse the string using iterators (for, foreach)
const reverse = (text) => {
  let revstr = '';
  for (let i = text.length - 1; i >= 0; i -= 1) {
    revstr += text[i];
  }
  return revstr;
};

module.exports = reverse;
