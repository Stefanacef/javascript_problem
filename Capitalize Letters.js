//Capitalize Letters
const word = "i love you";

const firstL = function (word) {
  const w = word
    .toLowerCase()
    .split(" ")
    .map((word) => {
      // return word.slice(0,1).toUpperCase()+word.slice(1)
      return word[0].toUpperCase() + word.substr(1);
    });

  return w.join(" ");
};

console.log(firstL(word));
