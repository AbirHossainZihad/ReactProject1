import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className='nav-container'>
                <div className='logo-div'>
                    <NavLink to="/">Design<span>AGENCY</span></NavLink>
                </div>
                <nav className='navbar'>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/team">Team</NavLink></li>
                        <li><NavLink to="/service">Service</NavLink></li>
                        <li><NavLink to="/project">Projects</NavLink></li>
                        <li><NavLink to="/testimonial">Testimonials</NavLink></li>
                        <button className='btn1'>Login</button>
                        <button className='btn2'>Register</button>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Header;