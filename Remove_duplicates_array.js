const a =[1,1,2,3,4,5,5]
let aL=a.length;
let b=[];
const remduplicates=function(arr){

for(let i=0; i<aL; i++){
if(b.indexOf(arr[i])==-1){
  b.push(arr[i])
}
}

return b;

}
console.log(remduplicates(a))
