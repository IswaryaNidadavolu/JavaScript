var array=[1,2,3,4,5];
array.unshift('ish');
array[(array.indexOf('ish'))]='ad'
var second=array.splice(3,3);
console.log(second);
console.log(array);