import { Link, Outlet } from 'react-router-dom'


const About = () => {
    return(
        <>
        
        <h1>About Us</h1>
        <p>This is my About Page</p>
        <Link to="about-company"> About Company</Link> | {""}
        <Link to="about-me"> About Me</Link>
        <Outlet/>
        
        </>
    )
}

export default About