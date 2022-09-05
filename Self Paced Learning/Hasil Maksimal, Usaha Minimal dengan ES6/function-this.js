const hitung = function(angka1, angka2){
    return angka1+angka2
}

// arrow function
const hitungA = (angka1, angka2) => {
    return angka1+angka2
}

// arrow function lebih sederhana tanpa return
const hitungArrow = (angka1,angka2) => angka1+angka2;

// penggunaan function
let a = [1,2,3,4,5]
a = a.map((v)=>v+2)
console.log(a);

//penggunaan this
let artist = "Deadsquad";

function playGig(){
    let instrument = ["Drum", "Gitar"]
    console.log("Kita akan bermai musik dari: " + this.artist);
}

playGig();