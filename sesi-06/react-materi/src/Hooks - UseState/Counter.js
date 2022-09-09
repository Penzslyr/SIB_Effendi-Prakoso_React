//Import useState
import { useState } from "react"

//menggunakan props dengan nama initialCount

function Counter({initialCount}){

    //deklarasi State
    //count fungsi seperti get pada java
    //setcount untuk ubah value
    const [count, setCount] = useState(initialCount)
    return(
        <>
            Count: {count}
            {/* binding function pada btn */}
            <br/>
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(prevCount=> prevCount-1)}>-</button>
            <button onClick={()=>setCount(prevCount => prevCount + 1)}>+</button>
        </>
    )
        
    
}

export default Counter