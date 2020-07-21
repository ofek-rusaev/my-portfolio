import React from 'react';

import profile_pic from '../images/home/profile_pic.png';
import Resume from '../documents/Ofek Rusaev - CV.pdf';

// Skills logos
import esLogo from '../images/skills/es6.png'
import htmlLogo from '../images/skills/html5.png'
import sccLogo from '../images/skills/css3.png'
import sassLogo from '../images/skills/sass.png'
import jqueryLogo from '../images/skills/jquery.png'
import jsLogo from '../images/skills/js.png'
import vueLogo from '../images/skills/vue.png'
import reactLogo from '../images/skills/react.png'
import ngLogo from '../images/skills/ng.png'
import nodejsLogo from '../images/skills/nodejs.png'
import npmLogo from '../images/skills/npm.png'
import gitLogo from '../images/skills/git.png'
import bootstrapLogo from '../images/skills/bootstrap.png'
import materializeLogo from '../images/skills/materialize.png'




const About = () => {
    return (
        <div id="about" >
            <section className="about">
                <img src={profile_pic} alt="" />
                <section className="about-info">
                    <div>
                        <p>Hi, I'm Ofek Rusaev. Full stack developer based in Tel Aviv.</p>
                        <p>I am Dynamic and Creative person with passion for pixel perfect design and solving challenges.</p>
                        <p>Graduate of the Coding Academy - Intensive Coding Bootcamp (640+ hours) that qualifies Full Stack developers</p>
                    </div>
                    <button className="download-btn"><a href={Resume} download>Download Resume</a></button>
                </section>
            </section>
            <p className="skills">Here are few of my skills...</p>
            <section className="skills-container" alt="">
                <img src={jsLogo} title="Javascript" alt="" />
                <img src={htmlLogo} title="HTML5" alt="" />
                <img src={sccLogo} title="CSS3" alt="" />
                <img src={sassLogo} title="SASS" alt="" />
                <img src={esLogo} title="ES6" alt="" />
                <img src={jqueryLogo} title="jQuery" alt="" />
                <img src={vueLogo} title="Vue" alt="" />
                <img src={reactLogo} title="React" alt="" />
                <img src={ngLogo} title="Angular" alt="" />
                <img src={nodejsLogo} title="Node.js" alt="" />
                <img src={npmLogo} title="NPM" alt="" />
                <img src={gitLogo} title="Git" alt="" />
                <img src={bootstrapLogo} title="Bootstrap" alt="" />
                <img src={materializeLogo} title="Materialize" alt="" />
            </section>
        </div>
    );
}

export default About;