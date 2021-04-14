//get number 1


const number={
  _number:1,
  getnumber:function(){
    return this._number;
  }
}


const getnumber=number.getnumber.bind(number);
console.log(getnumber())
//or
console.log(number.getnumber());
