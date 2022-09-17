
let x = NaN
let y = 0
let z = -0

console.log(Object.is(x,x));
console.log(y === z);

let o1 = {
    foo(){
        console.log("foo");
    }
}

var o2 = {o2}
Object.setPrototypeOf(o2,o1)
o2.foo()
