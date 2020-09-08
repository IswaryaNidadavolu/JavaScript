function person() {

}
var result=new person();
person.new='Max';
console.log(result.__proto__==person.prototype);