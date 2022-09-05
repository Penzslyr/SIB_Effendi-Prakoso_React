// default parameter pada function

function greet(name, greeting){
    name = typeof name !== "undefined" ? name : "Student";
    greeting = typeof greeting !== "undefined" ? greeting : "Welcome Kode";

    return console.log(`${greeting} ${name}!`);
}

function greet(name = "student", greeting= "welcome kode"){
    return console.log(`${greeting} ${name}!`);
}

greet();
greet("Raka");
greet("Raka", "Halo")

// default parameter dengan arrow

let Func = (a ,b = 10) => console.log(a+b);

Func(20)
Func(20,50)

let NotWorking = (a = 10, b) => console.log(a+b);
NotWorking(20) //Nan


