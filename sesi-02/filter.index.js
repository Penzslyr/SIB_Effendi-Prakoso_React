//Filtering array
const animals = [
    {name: "Fluffy", species: "cat"},
    {name: "Carlo", species: "dog"},
    {name: "Nemo", species: "fish"},
    {name: "Hamilton", species: "dog"},
    {name: "Dory", species: "fish"},
    {name: "Ursa", species: "cat"},
];

console.log(animals);

//filtering cara konvensional: menggunakan for loop
let fishKonven = [];
for(let i=0; i<animals.length; i++){
    if(animals[i].species === 'fish'){
        fishKonven.push(animals[i]);
    }
}
console.log(fishKonven);

//filtering dengan menggunakan filter
let fish = animals.filter((animal)=> animal.species ==='fish')
console.log(fish);

//mapping array cara konvensional for loop
let namesK =[];
for (let i=0; i<animals.length; i++){
    namesK.push(animals[i].name);
}
console.log(namesK);

//Mapping array dengan menggunakan map
let Anames = animals.map((animal)=>animal.name)
let names = animals.map((animal)=>animal.name + " is a " + animal.species);
console.log(names);

//Reduce
let orders = [
    {total: 325},
    {total: 512},
    {total: 128},
    {total: 32},
]

//reduce dengan cara konven > for loop
let totalK = 0;
for(let i=0; i<orders.length;i++){
    totalK = totalK + orders[i].total;
}
console.log(totalK);

let total = orders.reduce((total,order)=>total + order.total,0);
console.log(total);
