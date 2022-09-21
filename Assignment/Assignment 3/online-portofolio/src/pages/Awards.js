
const Awards = () => {
    const data = [
        {
            id: 1,
            name: "Juara lorem ipsum"
        },
        {
            id: 2,
            name: "Juara lorem ipsum"
        },
        {
            id: 3,
            name: "Juara lorem ipsum"
        },
        {
            id: 4,
            name: "Juara lorem ipsum"
        },
        {
            id: 5,
            name: "Juara lorem ipsum"
        },
        {
            id: 6,
            name: "Juara lorem ipsum"
        },
    ]
    return(
        
        <>
        <section id="awards">
        <div className="aboutdiv">
        <h1 className="expTitle">Awards</h1>
        { data !== null && data.map((res) => {      
             return (
                <>
                        <hr/>
                        <h2>{res.name}</h2>
                </>
            )
            })}
        </div>
        </section>
        
        </>
    )
}

export default Awards