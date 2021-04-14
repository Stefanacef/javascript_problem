//How do you create a private variable?

const private=function(){
const secret="secret";

  return function(){
    return secret;
  }
} 
const returnSecret=private();
console.log(returnSecret());
