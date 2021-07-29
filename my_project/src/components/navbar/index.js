import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './navbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to="/home">
                        <h1>Logo</h1>    
                    </NavLink>
                    <NavLink to="/uploadImage" activeStyle>
                        Upload Image
                    </NavLink>
                    <NavLink to="/searchImage" activeStyle>
                        Search Images
                    </NavLink>
                    <NavLink to="/userImages" activeStyle>
                        View User's Images
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
