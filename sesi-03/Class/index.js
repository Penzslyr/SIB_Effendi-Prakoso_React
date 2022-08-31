// Deklarasi
class Employee {
    doWork(){
        return "Complete!";
    }
}

// Pemanggilan 
let scott = new Employee();
console.log(scott.doWork());

// Konstruktor
class EmployeeK {
    constructor (name){
        this._name = name;
    }
    doWork(){
        return "Complete!"
    }
    getName(){
        return this._name;
    }
}
let scottK = new EmployeeK('Scott Moss K')
console.log(scottK.getName());

// Class Inheritance
class Person {
    constructor(name){
        this._name = name;
    }
    getName(){
        return this._name;
    }
}

 
class EmployeeP extends Person{
    // Employee "is-a" person
} 

let scottP = new EmployeeP("Scott Moss P");
console.log(scottP.getName());


// Menambahkan fungsi khusus yang berjalan di Inheritance Class


// menambahkan fungsi doWork di kelas turunan
class Employee1 extends Person {
    doWork(){
        return this._name + " is working"
    }
}
let scott1 = new Employee1("Scott Moss 1");
console.log(scott1.getName());
console.log(scott1.doWork());

// error karena memanggil fungsi kelas turunan di kelas induknya
// const rendy = new Person("Rendy aUGUSTO");
// console.log(rendy.doWork());

// Method Super, memanggil class name dengan method super
class EmployeeS extends Person{
    constructor(name,title){
        super(name);
        this._title = title;
    }
    showTitle(){
        return " is a " + this._title 
    }
    getTitle(){
        return this._title;
    }
    
}

let scottS = new EmployeeS("Scott Moss Super", "President");
console.log(scottS.getName() + scottS.showTitle() + ", title: " + scottS.getTitle() );
// console.log();
// console.log(scottS.showTitle());

