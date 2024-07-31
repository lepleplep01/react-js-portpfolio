
import '../styles/Navbar.css'
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
function Navbar() {
    const [statusTampil, setStatusTampil] = useState('')

    function tampilMenu() {
        if(statusTampil === '') {
            setStatusTampil('tampil')
        } else {
            setStatusTampil('')
        }
    }
  return (
    <nav>
    <div className="wrapper"> 
        <div className="logo">
            <Link to="/">Portofolio</Link>
        </div>
        <button onClick={tampilMenu}>
            {
                statusTampil == '' ? (<FaBars />) : (<IoIosCloseCircle />)
            }

        </button>
        <div className={`menu ${statusTampil}`} onClick={tampilMenu}>
            <ul> 
                <li><HashLink smooth to="/#portfolio">Portofolio</HashLink></li>
                <li><HashLink smooth to="/#about">About</HashLink></li>
                <li><Link to="/experience">Experience</Link></li>
                {/* <li><HashLink smooth to="/#contact">Contact</HashLink></li> */}
             
            </ul>
            
        </div>
    </div>
   </nav>
  )
}

export default Navbar