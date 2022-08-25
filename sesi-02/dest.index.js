const user = {}
user.name = 'Effendi Prakoso'
user.handle = '@Effendiprakoso'
user.location = 'Yogyakarta, Indonesia'
console.log(user);

//extraction
const name1 = user.name;
const handle1 = user.handle;
const location1 = user.location;
console.log(name1,handle1, location1);

//object literal notation > menambahkan properti banyak sekaligus
const user1 = {
    name2: 'Effendi Prakoso',
    handle2:'@Effendiprakoso',
    location2: 'Yogyakarta, Indonesia'
}

//extraction lebih simple 
const {name2, handle2, location2} = user1;
console.log(name2, handle2, location2);

//destructing dengan sebuah function
const getUser = () => {
    return{
        name3: 'Effendi Prakoso',
        handle3:'@Effendiprakoso',
        location3: 'Yogyakarta, Indonesia'
    }
}
const {name3, handle3, location3} = getUser();
console.log(name3, handle3, location3);

//Destructing array > menggunakan fungsi split untuk menghapus tanda seperti koma
const csv = "1997, Ford, F350, Must Sell!"
const [year,make,model,description] = csv.split(",")
console.log(year,make,model,description);

//Aliasing object properti > memberi nama lain untuk properti yang kita ekstrak.
const user2 = {
    n: 'Effendi Prakoso',
    h:'@Effendiprakoso',
    l: 'Yogyakarta, Indonesia'
}

const {n: name, h:handle, l:location} = user2
console.log(name, handle, location);
console.log(this);









