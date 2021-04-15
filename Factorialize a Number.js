//For example: 5! = 1 * 2 * 3 * 4 * 5 = 120


function factorialize(num) {
  let numFac=[] ; 
  
  for(let i=1;i<=num;i++){
    if(numFac.indexOf(num[i])==-1){
      numFac.push(i);
    }
  }
  return numFac.reduce((acc,val)=>{
    return acc=acc*val;
  },1)
}

console.log(factorialize(5));
