
function printFirstAndSecondElement([first,second]){
    console.log("element pertama adalah"  +first + " kedua adalah:" +second);
}

function printSecondAndFourthElment([second,fourth]){
    console.log("element kdua adalah"  +second + " keempat adalah:" +fourth);
}

var array = ["1","2","3","4","5"]

printFirstAndSecondElement(array[2], array[3])
printSecondAndFourthElment(array)

function printBasicInfo({firstName, secondName, profession}){
    console.log(firstName + "-" + secondName + "-"+ profession);
}

var person = {
    firstName: "Ardhi",
    secondName: "Raka",
    age: 33,
    children: 3,
    profession: "Kode"
}

printBasicInfo(person)