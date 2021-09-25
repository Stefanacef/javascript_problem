let arr = [
  [-1, 1, -7, -8],
  [-10, -8, -5, -2],
  [0, 9, 7, -1],
  [4, 4, -2, 1],
];
function diagonalDifference(arr) {
let left=[]
let right=[]
arr.map((e,i)=>{
return left.push(arr[i][i])
})
arr.map((e,i)=>{
return right.push(arr[i][arr.length-i-1])
})
console.log(right)
let dif = left.reduce((acc,e)=>acc+e) -right.reduce((acc,e)=>acc+e)
return Math.abs(dif)
}
console.log(diagonalDifference(arr))
