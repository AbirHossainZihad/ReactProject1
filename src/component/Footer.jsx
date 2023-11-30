import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className='footer-section'>
                <div className='footer-parent'>
                <div className='dv1'>
                    <h2>WEB LOGO</h2>
                    <p>Some footer text about the <br /> Agency. Just a little description to <br /> help people understand you better</p>
                    <div className='fti-div'>
                    <div className='fti'>
                        <img src="images/vectorzz.png" alt="" />
                    </div>
                    <div className='fti'>
                        <img src="images/Vector (1).png" alt="" />
                    </div>
                    <div className='fti'>
                        <img src="images/Vector (2).png" alt="" />
                    </div>
                    <div className='fti'>
                        <img src="images/Vector (3).png" alt="" />
                    </div>        
                    </div>
                </div>
                <div className='dv2'>
                    <p>Quick Links</p>
                    <ul>
                        <li><NavLink to="/service">Services</NavLink></li>
                        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                        <li><NavLink to="/aboutus">About Us</NavLink></li>
                        <li><NavLink to="/contactus">Contact Us</NavLink></li>
                    </ul>
                </div>
                <div className='dv3'>
                    <div className='dv3-txt'>
                    <span>Address</span>
                    </div>
                    <div className='dv3-txt2'>
                    <p>Design Agency Head Office</p>
                    <p>Airpory Road</p>
                    <p>United Arab Emirate</p>
                    </div>
                </div>
                <div className='copy-div'>
                    <p>Copyright Design Agency 2022</p>
                </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;