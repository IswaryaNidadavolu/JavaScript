function person() {
    this .name='ishu'
    this.greet= function()
    {
        console.log('Hello this is ' +this,name);
    }
    }
    person.prototype.greetgeneral=function(){
        console.log('Hello');
    };
    var first=new person();
    person.name='adi';
    var second=new person();
    console.log(first instanceof person);

