const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true]; 


const makeAllCaps = x => {
    return new Promise((resolve, reject) => {
    if(typeof x === 'object'){
         setTimeout(() => {
            x = x.map(textUpper => typeof textUpper === 'string' ? textUpper.toUpperCase() : textUpper=textUpper);
             resolve(x)
        });
            
     }
    else{
        reject('rejected')
    }
    });
}

const sortWords = x => {
    return new Promise((resolve, reject) => {
        if(typeof x === 'object'){
            setTimeout(()=>{
                x = x.sort();
                resolve(x)
            })
        }else {
            reject('rejected')
        }

    })
}

makeAllCaps(arrayOfWords)
.then(sortWords)
.then((result) => console.log(result))
.catch(error=>console.log(error))

makeAllCaps(complicatedArray)
.then((result) => console.log(result))
.catch(error=>console.log(error))

