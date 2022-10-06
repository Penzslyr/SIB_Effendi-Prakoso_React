import { Link, useNavigate } from "react-router-dom"

function Header(){
    return (
        <>
        <nav className="py-2 bg-light border-bottom">
            <div className="container d-flex flex-wrap">
                <ul className="nav me-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link link-dark px-2 active" aria-current="page">Home</a>
                    </li>
                    <li className="nav-item">
                     <Link className="nav-link link-dark px-2 active" to="/about"> About Us </Link>
                        
                    </li>

                </ul>    
            </div>

        </nav>
        </> 
)}

export default Header