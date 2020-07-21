import React, { useEffect } from 'react';
// import { Link, NavLink, withRouter } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
// import { Link, animateScroll as scroll } from "react-scroll";
import { Link } from "react-scroll";
import logo from '../images/nav-logo.JPG'

const Navbar = () => {

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const nav = document.getElementById('navbar');
            nav.style.display = (window.scrollY > 500) ? 'block' : 'none'
        })
    })
    return (
        <header id="navbar" className="navbar">
            <div className="navbar-container">

                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-80} duration={500}><img className="navbar-logo" src={logo} alt="" /></Link>

                <nav className="navbar-wraper">
                    <section>
                        {/* <Link activeClass="active" to="home" spy={true} smooth={true} offset={-80} duration={500}>Home</Link> */}
                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-80} duration={500}>About</Link>
                        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-80} duration={500}>Portfolio</Link>
                        <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-80} duration={500}>Experience</Link>
                        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-80} duration={500}>Contact</Link>
                    </section>
                </nav>
            </div>
        </header>
    );
}

export default withRouter(Navbar);