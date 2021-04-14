//Validate Palindromes
const word="racecar";

const check=function(wor){
const check=wor.split('').reduce((acc,cur)=>{
  return acc=cur+acc;
})
if(wor===check) return true;
else return false;



}
console.log(check(word))


///////////////OR
const check = function (wor) {
  const check = wor.split("").reverse().join("");

  return check === wor;
};
console.log(check(word));
