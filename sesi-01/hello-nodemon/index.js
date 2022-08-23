//install nodemon -g > global, // -d >local
//
//1. nodemon di cmd
//2. npm run start > kita nambahkan script runningnya di package.json
//ex script : start : "nodemon index.json"

// [Desklarasi variable dengan let]
let score
score = 50
console.log("Hasil variable score: " +score)

let playerName ="Budi"
console.log("Hasil variable playerName: "+playerName)
// alert(playerName)
playerName = "Andy"
console.log("Halo playerName "+playerName)
// alert(playerName)

//[Dekrlarasi variable dengan const]
const pi = 3.14
//pi = 12;
console.log(pi)

//bukan berupa object atau array > tidak bisa diganti
const angkaK = 10

//sample object const
//umum, id, nama, jkenkel
const objectAngkaKeb = {id:1, name:"Effendi", jenkel:";"}
objectAngkaKeb.id = 2
objectAngkaKeb.name = "Andi"
objectAngkaKeb.jenkel = "Laki-Laki"
console.log(objectAngkaKeb)

//sample array const
const arrayNumber = [1,2,3,4,5]
arrayNumber.push(6)
arrayNumber.push(7)
console.log(arrayNumber)

var namaLengkap = "test"

//tipe data number
let weight = 75
console.log(weight);
// alert(weight + 15)

let originalNum = 23
let newNum = originalNum + 7 
// alert(newNum)

let numberToBeAdded = 7
let newNum1 = originalNum + numberToBeAdded
// alert(newNum1) 

let umur = 18
console.log("Nama Lengkap saya "+namaLengkap +" umur saya " +umur)

//tipe data string dan manipulasi string 
console.log("Hello Class Modern Javascript!")
console.log('Nama saya budi');
console.log(`js is fun`);

//menggunakan petik pada string dengan backslash dan petik 2
console.log(`She's great person`);
console.log("She's great person");
console.log('welcome\'s');

// let visitor = prompt('siapakah namamu')
let visitor = "Fendi"
//penggabungan string
let message = 'halo ' + visitor
let message1 = 'halo ' + visitor +'. Selamat datang di kelas Modern JS!' 
+ ' kita senang sekali kamu mau datang berkunjung ' + visitor + ' semoga kamu berkenan kembali belajar bersama'
//alert(message)
console.log(message1)

let message3 = message + '. Selamat datang dikelas modern'
console.log(message3);

message += 'Kita senang sekali km mau datang berkunjung,'
console.log(message);

let isRaining = true
let isFinished = true
let menuOpen = "true";
console.log(isRaining);
console.log(isFinished);
console.log(menuOpen);

//deklarasi array
var kode = ["react", "PHP", "Ruby"];
let kode2 = ["react", "PHP", "Ruby"];
const kode3 = ["react", "PHP", "Ruby"];
console.log(kode)

//operasi 3 array
var fruits = ['anggur', 'melati', 'apel', 'jeruk' ]
var buah_buahan = ['strawberry' , 'pir', 'durian']
fruits.push.apply(fruits, buah_buahan)
console.log(fruits)

//menghapus item pada array
let indexHapus = 1;
fruits.splice(indexHapus, 1)
console.log(fruits) 

//mengosongkan array
//fruits = []
fruits.splice(0, fruits.length)
console.log(fruits)
console.log(fruits);




