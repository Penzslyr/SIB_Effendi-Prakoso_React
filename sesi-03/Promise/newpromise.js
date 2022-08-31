setTimeout(() => {
    console.log("Tick");
}, 1000);

// Membuat promise baru
const doSomething = function(){
    return new Promise((resolve, reject) => {
        
    })
};

let doIt = doSomething()
doIt.then(response => {
    console.log(response);
})

doIt.catch(error => {
    //deal with error 
})

const setTimeoutPromise = (duration) => 
new Promise((resolve,reject)=>{
    setTimeout(resolve, duration);
});

setTimeoutPromise(1000).then(()=>
console.log("Tick"))