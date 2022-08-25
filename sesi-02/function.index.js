//function declaration > menyimpan sebuah fungsi kedalam sebuah variabel
function add (a,b){
    return a+b
}

//function exprtession > 
const addA = function (a,b) {
    return a+b
}

//arrow function
const add2 = (a,b) => {
    return a+b
}

//penggunaan this
let counter = {
    val: 0,
    increment: function (){
    this.val += 1;}
}


//fungsi dari arrow function
//1. implicit return 
function add(a,b){
    return a+b
}

function squre(x){
    return x*x
}

function three(){
    return 3
}

const addB = (a,b) => a+b;
const square = x => x*x;
const threeA = () => 3;

const add1 = (a,b) => {
    const temp=a+b
    return temp
}

//Manajemen this keyword
function person4(){
    this.age = 0;
    
    setInterval(function(){
        this.age++;
        console.log(this.age);
    },1000);
}

const pA = new person4();
console.log(pA);
//bug , this dalam anon function tidak mengenal this yang berada pada fungsi experson

//menyelesaikan nan diatas dengan menyimpan this ke variable lain
function person(){
    this.age = 0;
    const that = this;
    setInterval(function(){
        this.age++;
        console.log(that.age);
    }.bind(this),1000);
}

const p = new person();

//menambahkan method bind
function person1(){
    this.age = 0;
    setInterval(function(){
        this.age++;
        console.log(this.age);
    }.bind(this),1000);
}

const p1 = new person1();

//menggunakan arrow function
function person2(){
    this.age = 0;
    setInterval(()=>{
        this.age++
        console.log(this.age);
    },1000);
}

const p2 = new person2();


//Higher-Order Function 
//Membuat log "Tick" dengan interval 1000ms
setInterval(()=>{
    console.log("Tick1");
}, 1000)

const printTick = ()=>{
    console.log("Tick");
}

setInterval(printTick,1000);

function Person()
{
    this.age = 0 
    setInterval(()=>{ 
        this.age++
        console.log(this.age);
    },1000)
}
