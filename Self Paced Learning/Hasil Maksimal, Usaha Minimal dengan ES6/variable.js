// let
var a = 2
{
    let a=3;
    console.log(a);
    a = 6;
    console.log(a);
}
console.log(a);

// const 
{
    const b = 4;
    console.log(b);
    // b = 5;
    // tidak bisa diassign karena constant value
}

function f(){
    var x = 1;
    let y = 2;
    const z = 3;

    {
        var x = 100;
        let y = 200;
        const z = 300;
        console.log("x dalam block scoop adalah", x);
        console.log("y dalam block scoop adalah", y);
        console.log("z dalam block scoop adalah", z);
    }
        console.log("x luar block scoop adalah", x);
        console.log("y luar block scoop adalah", y);
        console.log("z luar block scoop adalah", z);
}

f();