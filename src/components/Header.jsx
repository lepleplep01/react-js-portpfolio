import profilePitcure from '../assets/porfo.jpg'
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";

import { Link } from 'react-router-dom';

import '../styles/Header.css'
function Header() {
  return (
    <header>
        <div className="header-jumbotron">
            <img src={profilePitcure} />
            <h3>Ahmad Fahlepi</h3>
            <p>Programer - IT support </p>
            <div className='socialMedia'>
                <Link to="https://www.instagram.com/inilepi_/"><FaInstagram /></Link>
                <Link to="https://github.com/lepleplep01"><FaGithub /></Link>
                <Link to="https://www.linkedin.com/in/ahmad-fahlepi-4a82a428a/"><CiLinkedin /></Link>
                <Link to="https://www.facebook.com/ahmadpahlevi22/?locale=id_ID"><FaFacebook /></Link>
            </div>
        </div>
    </header>
  )
}

export default Header