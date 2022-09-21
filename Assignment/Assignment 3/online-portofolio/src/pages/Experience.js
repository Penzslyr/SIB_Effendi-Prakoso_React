
const Experience = () => {
    const data = [
        {
            id: 1,
            name: "Sanbercode Bootcamp - React JS",
            date: "01 Juli 2022 - 31 Juli 2022",
            place: "Sanbercode",
            desc: "Bootcamp about React JS"
        },
        {
            id: 2,
            name: "Hacktiv8 Bootcamp - React JS",
            date: "18 Agustus 2022 - 31 Desember 2022",
            place: "Hacktiv8",
            desc: "Bootcamp about React JS and React Native"
        }
    ]
    return(
        <>
        
        <section id="experience">
        <div className="aboutdiv">
        <h1 className="expTitle">Experience</h1>
        { data !== null && data.map((res) => {      
             return (
                <>
                        <hr/>
                        <h2>{res.name}</h2>
                        <p>{res.date}</p>
                        <p>{res.desc}</p>
                </>
            )
            })}
        </div>
        </section>
        
        </>
    )
}

export default Experience