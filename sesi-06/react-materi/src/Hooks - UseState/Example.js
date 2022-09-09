import React, {useEffect, useState} from 'react'

function Example(){
    //Deklarasi var state bareu dengan nama count dengan default val 0
    const [count, setCount] = useState(0)

    //mirip componentDidMount dan ComponentDidUpdate
    useEffect(()=>{
        // update judul document title 
        document.title = `You Clicked ${count} times`
    })

    return(
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={()=> setCount(count+1)} >
            Click Me
            </button>
        </div>
    )


}

export default Example