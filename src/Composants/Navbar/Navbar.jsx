import React from 'react'; 
import "./Navbar.css";


//------------Partie Restante pour le Navbar (Icone du Menu quand le site est responsive Principe du RWD ainsi que les liens de redirection vers d'autres pages à commercer par le HOME(la page d'accueil))-----------------------------


// import {Link } from 'react-router-dom'; 
// import {MdFingerprint} from 'react-icons';
// import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav>
            {/* <div className='navbar-container container'>
                <Link to='/' className="navbar-logo">
                 <MdFingerprint className="navbar-icon" />   
                    StarWars
                </Link>
                <div className='mennu-icon'>

                </div>
            </div>
             */}
            
            <ul className='liste'>
                <li className='items'>LE COTÉ LUMINEUX </li>
                <li className='items'> LE COTÉ OBSCUR </li>
                <li className='items'> L’EMPIRE </li>
                <li className='items'> LES DROÏDES  </li>
                <li className='items'> LES EWOKS</li>
                <li className='items'> JABBA LE HUTT</li>
            </ul>
        
        </nav>
    );
};

export default Navbar;