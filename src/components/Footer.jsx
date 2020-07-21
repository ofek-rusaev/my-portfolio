import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const githubIcon = <FontAwesomeIcon icon={faGithub} />
    const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />

    return (
        <div className="footer">
            <a href="https://www.linkedin.com/in/ofek-rusaev/" target="_blank" rel="noopener noreferrer">
                {linkedinIcon}
            </a>
            <a href="https://github.com/ofek-rusaev" target="_blank" rel="noopener noreferrer">
                {githubIcon}
            </a>

        </div>
    );
}

export default Footer;