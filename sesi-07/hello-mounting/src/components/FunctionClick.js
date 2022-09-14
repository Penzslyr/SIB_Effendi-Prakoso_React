import React, {useState, useEffect} from "react"


function FunctionClick(){

    const [count, setCount] = useState(0)

    useEffect(()=> {

        document.title = `you clicked ${count} times`
    })

    return(
        <>
        <p>You Clicked {count} times</p>
        <button onClick={()=> setCount(count+1)} > Click Me</button>

        </>
    )
}

export default FunctionClick