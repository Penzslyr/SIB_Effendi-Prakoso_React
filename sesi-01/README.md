# SIB_Effendi-Prakoso_React
Effendi Prakoso
React and React Native
hacktiv8 student code : RCTN-KS05-016

//Kesimpulan

//apa itu variable
console.log("1. Variable adalah suatu penanda atau identitas untuk menyimpan nilai");

//apa penting nya variable
console.log("2. pentingnya variable adalah agar nilai kita bisa disimpan dan digunakan, serta dirubah nilainya sesuai kebutuhan")

//cara mendeklarasikan variable
console.log("3. ada 3 tipe nya yaitu denganMenggunakan Var, Let, Const");
console.log("Caranya dengan mengetikkan salah satu tipenya (var,let,const) dan mengetikkan nama variabelnya")
//example
let a 
var b 

//mengisi variable dengan nilai atau value
console.log("4. Mengisi variable dengan nilai dengan menggunakan '=' setelah nama variablenya, gunakan tanda petik dua setelah sama dengan jika nilai tersebut string, tidak perlu menggunakan petik dua jika variabel yang dibuat number atau boolean"); 
//ex
let stringA = "a"
let numberA = 2

//Memberi nama variable dengan baik
console.log("5. Memberi nama variable yang baik seperti tidak menggunakan nama fungsi yang sudah tersedia di js (reserved word) dan menggunakan camelCase");

//apa itu tipe data
console.log("6. Tipe data adalah jenis dari nilai pada variable");

//berbagai jenis tipe data
console.log("7. ada 3 tipe data yg paling umum digunakan yaitu number, string, dan boolean");

//tipe data number dan operasinya
console.log("8. Kita bisa langsung menggunakan operasi seperti tambah,kurang, bagi dan kali pada suatu variable dengan menuliskan nilai nya atau bisa juga mengoperasikan nya dengan 2 atau lebih variable, contohnya seperti dibawah");
let firstNumber = 8
let secondNumber = 2
let sumFirst = firstNumber + 2
let sumSecond = firstNumber + secondNumber
console.log(sumFirst, sumSecond);
console.log("hasilnya akan sama saja, jika ingin kali menggunakan * jika ingin bagi menggunakan / dan jika kurang menggunakan -");

//tipe data string dan cara memanipulasinya
console.log("9. Untuk menggabungkannya kita bisa memanggilnya dan menambahkannya saja dengan simbol + , jika menggunakan simbol yang ada seperti tanda \" bisa menggunakan tanda \\ agar tanda tersebut tidak terbaca error ");
//example
let stringAb = " Semoga mengerti!!!"
console.log(`console log menggunakan \`,',"` + stringAb);

//tipe data boolean 
console.log("10. Tipe data boolean hanya ada true, false saja, deklrasainya seperti dibawah ini");
let boolA = true
let boolB = false

//bagaimana cara mengatahui tipe data dari sebuah variable
console.log("11. Cara mengetahui tipe data dari sebuah variable dengan menggunakan fungsi typeoF");
//example
console.log(typeof boolA); // akan mereturn boolean
console.log(typeof stringA); // akan mereturn string


//Apa itu Array
console.log("12. Array adalah tipe data struktur yang dapat menampung banyak nilai dari data yang lain didalamnya, jadi misal kita punya array a. array tersebut dapat berisi 10 jenis nilai dengan index berbeda sehingga kita bisa menyimpan banyak nilai didalamnya");

//apa itu jenis array
console.log("13. ada beberapa salah satunya array satu dimensi dan array multi dimensi. ada beberapa metode operasi di array, satu yaitu merge 2 array dengan menggunakan fungsi push.apply, menggunakan fungsi .splice untuk menghapus item pada array, dan mengosongkan array dengan mendeklarasikan nya dengan array kosong atau dengan fungsi yang sama yaitu .splice");

//mengisi array
console.log("14. Mengisi array sama seperti dengan mengisi variable hanya setelah tanda sama dengan kita buka dengan simbol [ dan lalu mengisinya seperti biasa dengan seperti variable dan dipisahkan dengan tanda koma, jangan lupa untuk menutupnya dengan  ]");
//example
let arrayA = [1,"INI STRING", true]
