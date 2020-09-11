var res={
    first:'ad',
    second:'reddy',

}

var print=function (home,pin){
    console.log(this.first+ " "+ this.second + "from"+ home + ","+pin);
}
print.call(res,"rjy","12");
var name1={
    first:'ishu',
    second:'nid',
}
print.call(name1,"hyd","23");
print.apply(res,["rjy","12"]);

var example=print.bind(name1,"hyd","23");

example();