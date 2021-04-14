//modify element to array

let a=[1,2,3,4,5];
a=[0,...a];
a=[...a,6];
console.log(a);

let b=['b','c','d'];
b.unshift('a');
b.push('e');
b.pop();
console.log(b);
