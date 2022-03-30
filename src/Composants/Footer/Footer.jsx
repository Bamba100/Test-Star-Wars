import React from 'react'; 
import "./Footer.css";

const Footer = () => {
    return (
<div>
        <div className='footer'>

            <ul className='footer1'>
                <li>Terms of Use  </li>
                <li>Legal Notices</li>
                <li>Privacy Policy</li>                 
            </ul>
                
            <ul className='footer2'>
                <li>Your California Ltd. All Rights Reserved.</li>
                <li>Star Wars at Disney Store </li>
                <li>Privacy Policy</li>
            </ul>
            <div className='footer3'>
                <h4 >
                    FOLLOW STAR WARS
                </h4>
                <div>
                    <a href="https://facebook.com" class="tm-social-link">
                        <i class="fab fa-facebook tm-social-icon"></i>
                    </a>
                    <a href="https://twitter.com" class="tm-social-link">
                        <i class="fab fa-twitter tm-social-icon"></i>
                    </a>
                    <a href="https://instagram.com" class="tm-social-link">
                        <i class="fab fa-instagram tm-social-icon"></i>
                    </a>
                </div>
            </div>
                  
            
        </div>             
                
    </div>


    );
};

export default Footer;