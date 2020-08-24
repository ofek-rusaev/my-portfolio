import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from "react-scroll";

const Menu = ({ open, ...props }) => {
    const { className } = props;
    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;

    return (
        <div id="menu" open={open} aria-hidden={!isHidden} className={className}>
            <section>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-80} duration={500} tabIndex={tabIndex}>About</Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-80} duration={500} tabIndex={tabIndex}>Portfolio</Link>
                <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-80} duration={500} tabIndex={tabIndex}>Experience</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-80} duration={500} tabIndex={tabIndex}>Contact</Link>
            </section>
        </div>
    )
}

export default withRouter(Menu);