//Return the length of the longest word in the provided sentence.


function findLongestWordLength(str) {
 
  const strSplit = str.split(" ").map((val, i, arr) => {
    return val.split("").length;
  });
  const strL = Math.max(...strSplit);


  return strL;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
