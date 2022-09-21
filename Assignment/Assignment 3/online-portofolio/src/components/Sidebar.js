import React from "react";
import { Link } from "react-scroll";
import fotoMhs from './FotoMhs.png'

const Sidebar = () => {
    const picture = "https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg"
    return(
        <header>
        <nav>
            <div className="sidenav">
            <div className="ppdiv">
                <img className="pp" src={fotoMhs} alt="profil" />
            </div>
            <ul>
            {/* <li>
              <Link activeClass="active" smooth spy to="home">
                HOME
              </Link>
            </li> */}
            <li>
              <Link activeClass="active" smooth spy to="about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="experience">
                EXPERIENCE
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="skill">
                SKILLS
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="interest">
               INTEREST
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="awards">
               AWARDS
              </Link>
            </li>
          </ul>
            
            </div>
        </nav>
        </header>
    )
}

export default Sidebar