function person(name,age) {
    this.name=name;
    this.age=age;
}
var first=new person('ishu',22);
var second=new person('adi',27);
console.log(first);
console.log(second);