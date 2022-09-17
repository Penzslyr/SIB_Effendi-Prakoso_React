//Es
function person(name, height){
    this.name = name;
    this.height = height;
}

person.prototype.sayName = function(){
    this.console.log(this.name)
}

//ES6

class person{
    constructor(){
        this.name = "Perosn"
        this,height = 150
    }

    sayName(){
        console.log(this.name);
    }
}

let person1 = class person1{
    constructor(){
        this.name = "Perosn"
        this,height = 150
    }

    sayName(){
        console.log(this.name);
    }
}

//sub-class

class person2{
    constructor(){
        this.name = "Perosn"
        this,height = 150
    }

    sayName(){
        console.log(this.name);
    }
}

class Developer extends person2{
    constructor(name,height){
        super(name, height)
        this.name = "Developer"
    }
}

var kode = new Developer()
kode.sayName();