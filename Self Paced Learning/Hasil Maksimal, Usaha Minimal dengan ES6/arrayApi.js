let c = Array.of(1,2,3)
console.log(c.length)

let arrLike = {
    length:4,
    2:"foo"
}

console.log(Array.from(arrLike));

let numb = [1,2,3,4,5,7,8]
console.log(numb.copyWithin(3,0,1));

let a = [null, null, null, null]
console.log(a.fill(42,1,3));

numb.find((v)=> v==2)
console.log(numb.find((v)=> v==2));

console.log([...numb.values()]);