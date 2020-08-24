import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const githubIcon = <FontAwesomeIcon icon={faGithub} />
    const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />

    return (
        <div className="footer">
            <div className="footer-links">

                <a href="https://www.linkedin.com/in/ofek-rusaev/" target="_blank" rel="noopener noreferrer">
                    {linkedinIcon}
                </a>
                <a href="https://github.com/ofek-rusaev" target="_blank" rel="noopener noreferrer">
                    {githubIcon}
                </a>
            </div>

            <small>Main photo credit - <span>Photo by <a href="https://unsplash.com/@jessbaileydesigns?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jess Bailey</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></small>
        </div>
    );
}

export default Footer;