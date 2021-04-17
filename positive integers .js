//Returns a new array containing only the square of only the positive integers


const squareList = arr => {
  return arr
    .filter(num => num > 0 && Number.isInteger(num))
    .map(val => Math.pow(val,2))

};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
