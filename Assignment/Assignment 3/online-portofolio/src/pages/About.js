import iconweb from '../components/webdevicon.png'
import { Button } from 'react-bootstrap';
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const About = () => {
    return(
        <section id="about">
        <div className="aboutdiv">
        <div className='h1div'>
            <h1 className='h1text'>Hi, I am <h1 className='h1text' style={{ color: "rgb(248, 103, 19)" }}>Effendi Prakoso</h1> a Web Developer!</h1>
        </div>
        <p className='inline1'>+62 821 43941519 | Fendi.prakoso048@gmail.com</p> 
        <div className='paragraphdiv'>
        <p className='paragraph'>I am an web developer that focusing on front end but i know a little bit of backend. Tech that are use for front-end are React Js, for backend i using Laravel. Im interested in Web Development and Know some little bit of Mobile Development using Java Native</p>
        </div>
        <div className='btn-media'>
        <MDBBtn style={{ backgroundColor: '#55acee' }} target="_blank" href='https://twitter.com/Effendipra' >
            <MDBIcon className='me-4' fab icon='twitter' /> Twitter
        </MDBBtn> {" "}
        <MDBBtn style={{ backgroundColor: '#3b5998' }} target="_blank"href='https://www.facebook.com/fendi.prakoso.7/ '>
            <MDBIcon className='me-4' fab icon='facebook' /> Facebook
        </MDBBtn> {" "}
        <MDBBtn style={{ backgroundColor: '#ac2bac' }} target="_blank"href='#'>
            <MDBIcon className='me-4' fab icon='instagram' /> Instagram
        </MDBBtn> {" "}
        <MDBBtn style={{ backgroundColor: '#333333' }} target="_blank"href='https://github.com/Penzslyr'>
            <MDBIcon className='me-4' fab icon='github' /> Github
        </MDBBtn>
        </div>

        {/* <Button variant="primary" size="lg">Contact Me</Button> */}
        </div>
        
        </section>
    )
}

export default About