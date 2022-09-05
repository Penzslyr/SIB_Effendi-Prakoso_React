setTimeout(() => {
    console.log("Tick");
}, 1000);

// Membuat promise baru
const doSomething = function(param){
    return new Promise((resolve, reject) => {
        if(param===1)
        resolve("Hello ini resolve")
        else
        reject("Hello ini reject")
    })
};

// let doIt = doSomething(2)
// doIt.then(response => {
//     console.log(response);
// })

// doIt.catch(error => {
//     console.log(error);
// })

let doIt = async () => {
    try{
        let result = await doSomething(1)
        console.log(result)
     }catch(error){
      console.log(error)
     }
  }
  
  doIt()


const setTimeoutPromise = (duration) => 
new Promise((resolve,reject)=>{
    setTimeout(resolve, duration);
});

setTimeoutPromise(1000).then(()=>
console.log("Tick"))

