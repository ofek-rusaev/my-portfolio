import React from 'react';
import ProjectList from './ProjectList';

const Projects = (props) => {
    let { projects } = props;

    return (
        <div id="projects" className="projects">
            <section className="section-title">
                <h2>PORTFOLIO</h2>
                <p>Here are some of my projects... You can view more of my work on <a href="https://github.com/ofek-rusaev" target="_blank" rel="noopener noreferrer">GitHub </a></p>
            </section>
            <section className="projects-container">
                {(projects.length) ? (<ProjectList projects={projects} />) : (<h2>Loading...</h2>)}
            </section>
            <div className="wave-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e9e9e9" fill-opacity="1" d="M0,96L80,90.7C160,85,320,75,480,96C640,117,800,171,960,170.7C1120,171,1280,117,1360,90.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
        </div >
    );
}

export default Projects;