//Integer Reversal
const number=123456;
const rev = function (num) {
  const numRev = number
  .toString()
  .split("")
  .reverse()
  .join("");

  return parseInt(numRev);
};
console.log(rev(number));
