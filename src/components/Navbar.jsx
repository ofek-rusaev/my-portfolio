import React, { useEffect, useState, useRef } from 'react';
import { useOnClickOutside } from '../hooks/hooks.js';
// import { withRouter } from 'react-router-dom';
import { Link } from "react-scroll";
import logo from '../images/nav-logo.JPG'
import Menu from './Menu';
import Burger from './Burger/Burger';

const Navbar = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    const menuClass = isDesktop ? 'navbar-desktop' : 'side-menu';

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const nav = document.getElementById('navbar');
            nav.style.display = (window.scrollY > 500) ? 'block' : 'none'
        })
    });

    useEffect(() => {
        const bool = (window.innerWidth > 1023);
        setIsDesktop(bool);
    }, [isDesktop]);

    return (
        <header id="navbar" className="navbar">
            <div className="navbar-container" >

                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-80} duration={500}><img className="navbar-logo" src={logo} alt="" /></Link>
                <nav ref={node}>
                    {!isDesktop ? (
                        <div><Burger open={open} setOpen={setOpen} /></div>
                    ) : ''}
                    {isDesktop || open ? (
                        <div><Menu open={open} setOpen={setOpen} className={menuClass} /></div>
                    ) : ''}
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
// export default withRouter(Navbar);