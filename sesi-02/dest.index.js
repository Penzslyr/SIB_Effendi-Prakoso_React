const user = {}
user.name = 'Effendi Prakoso'
user.handle = '@Effendiprakoso'
user.location = 'Yogyakarta, Indonesia'
//console.log(user);

//extraction
// const name = user.name;
// const handle = user.handle;
// const location = user.location;
// console.log(name,handle, location);

//object literal notation > menambahkan properti banyak sekaligus
const user1 = {
    name: 'Effendi Prakoso',
    handle:'@Effendiprakoso',
    location: 'Yogyakarta, Indonesia'
}

//extraction
// const {name, handle, location} = user;
// console.log(name, handle, location);

//destructing dengan sebuah function
const getUser = () => {
    return{
        name: 'Effendi Prakoso',
        handle:'@Effendiprakoso',
        location: 'Yogyakarta, Indonesia'
    }
}
//const {name, handle, location} = getUser();
//console.log(name, handle, location);

//Destructing array > menggunakan fungsi split untuk menghapus tanda seperti koma
const csv = "1997, Ford, F350, Must Sell!"
const [year,make,model,description] = csv.split(",")
console.log(year,make,model,description);

//Aliasing object properti > memberi nama lain untuk properti yang kita ekstrak.
const user2 = {
    n: 'Effendi Prakoso',
    h:'@Effendiprakoso',
    l: 'Yogyakarta, Indonesia'
}

const {n: name, h:handle, l:location} = user2
console.log(name, handle, location);

console.log(this);

//function declaration
function add (a,b){
    return a+b
}

//function exprtession
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
// function Experson(){
//     this.age = 0;
    
//     setInterval(function(){
//         this.age++;
//         console.log(this.age);
//     },1000);
// }

// const p = new Experson();
// console.log(Experson);
// bug , this dalam anon function tidak mengenal this yang berada pada fungsi experson

//menyelesaikan nan diatas dengan menyimpan this ke variable lain
function person(){
    this.age = 0;
    const that = this;
    setInterval(function(){
        this.age++;
        console.log(that.age);
    },1000);
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

const p1 = new person();

//menggunakan arrow function
function person2(){
    this.age = 0;
    setInterval(()=>{
        this.age++;
        console.log(this.age);
    },1000);
}

const p2 = new person();








