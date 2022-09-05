// old ways;

var name = "Fendi"
var greeting = "Hello " + name + "!"

console.log(greeting);
console.log(typeof greeting);

// template literal

let name1 = "Fendi"
let greeting1 = `Hello ${name1}!`
console.log(greeting1);
console.log(typeof greeting1);

// support breakline / multiple line tanbpa fungsi br
let text = `Selamat Belajar
ES6 Bersama KODE
dengan saya Raka`
console.log(text);

// Memasukan Inline function 
function upper(s){
    return s.toUpperCase();
}

let who = "Kode"
let text1 = `Selamat datang ${upper("Teman")}
${who}!`
console.log(text1);

// Raw
console.log(String.raw`Hello\nWorld`);
console.log("Hello\nWorld");

