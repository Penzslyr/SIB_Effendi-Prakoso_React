//Higher-Order Function 
//Membuat log "Tick" dengan interval 1000ms
setInterval(()=>{
    //console.log("Tick");
}, 1000)

const printTick = ()=>{
    console.log("Tick");
}

setInterval(printTick,1000);

