
const Skill = () => {
    const data = [
        {
            id: 1,
            name: "HTML"
        },
        {
            id: 2,
            name: "CSS"
        },
        {
            id: 3,
            name: "JavaScript"
        },
        {
            id: 4,
            name: "Laravel"
        },
        {
            id: 5,
            name: "React JS"
        },
        {
            id: 6,
            name: "Java Native"
        },
    ]
    return(
        <section id="skill">
        <div className="aboutdiv">
        <h1 className="expTitle">Skills</h1>
        { data !== null && data.map((res) => {      
             return (
                <div className="skills">
                   <ul><li>{res.name}</li></ul> 
                </div>
            )
            })}
        </div>
        </section>
    )
}

export default Skill