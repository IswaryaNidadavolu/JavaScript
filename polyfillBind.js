var name={
    firstname:"ishu",
    secondname:"naidu",
}
var grad=function(state,country){
    console.log(this.firstname+ ""+ this.secondname+ ", "+ state+ ", "+country);
}
var tom=grad.bind(name,"AP");
tom("india");

Function.prototype.mybind=function(...args){
    var design = this,
      param=args.slice(1);
    return function (args2) {
        design.apply(args[0],[param,args2]);
    }
}
var latest=grad.mybind(grad,"hyd");
latest("india");
