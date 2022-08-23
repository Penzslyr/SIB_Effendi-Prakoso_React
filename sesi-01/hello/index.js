//[[Contoh perbedaan var dan let]]
// nama = "Effendi Prakoso"
// var nama;
// console.log(nama);

// let nama2 = "Effendi P2"
// console.log(nama2)


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

let visitor = prompt('siapakah namamu')
//penggabungan string
let message = 'halo ' + visitor
let message1 = 'halo ' + visitor +'. Selamat datang di kelas Modern JS!'
alert(message)

//lanjutan ada di hello-nodemon/index.js

