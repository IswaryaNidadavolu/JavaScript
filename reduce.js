var array=[1,2,3,4];
console.log(array.reduce(function(total,value){
    return total+value;
}));
console.log(array);