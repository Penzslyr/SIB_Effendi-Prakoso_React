// Rest Pemisahan
let [c,...m] = [1,2,3,4,5]
//seperti dibawah
// let c = 1;
// m = [2,3,4,5]

console.log(m,c);

function fool(x,y,...z){
    console.log(x,y,z);
}
fool(1,2,3,4,5)

// Spread, Penggabungkan string

let param = ["Hello", true, 7]
let alter = [1,2,...param]
console.log(alter);

let a = [2,3,4]
let b = [1,...a, 5]
console.log(b);
