// filter

var values = [1,2,3,4,5,6,7,8]

function lessThan4(value){
    return value <4;
}

var valuelessThan4 = values.filter(lessThan4)
console.log(valuelessThan4);

//find 

let findMe = [
    {name:"Fendi", age:4},
    {name:"Prakoso",age:6}
]

let findPrakoso = findMe.find(obj => obj.name === "Prakoso")
console.log(findPrakoso);

// forEach

let valuesF = [1,2,3,4,5,6,7,8]
valuesF.forEach(item=> console.log(item))

//map

const arr = [
    {name:"Effendi",age:22},
    {name:"Prakoso",age:20}
]

const names = arr.map(person => person.name) 
console.log(names)

//reduce 

valuesR = [1,2,3,4,5,6,7,8]
let result = valuesR.reduce(function(acc,val){
    return acc + val
},0)

console.log(result);

//some

const namesS = ["Tom", "joe", "jOHM"]
let someS = namesS.some((name)=> name.length =4)
console.log(someS);

//every 
let EveryS = namesS.every((name)=> name.length > 4)
console.log(EveryS);

console.log( String.raw`Hello\nWorld`);