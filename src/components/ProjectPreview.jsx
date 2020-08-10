import React from 'react';

const ProjectPreview = (props) => {
    const { project } = props;
    let img = require('../' + project.images[0]);

    return (<>
        <div className="project square-ratio" style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover"
        }}>
            <h2>{project.title}</h2>

            <div className="overlay">
                <p>{project.description}</p>
                <ul>
                    {project.technical.map(((tech, i) => {
                        return <li key={i}>{tech}</li>
                    }))}
                </ul>
                <div className="project-links">

                    {project.github ?
                        <a href={project.github} target="_blank" rel="noopener noreferrer">View Code</a> : ''
                    }
                    <a href={project.website} target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </div>
            </div>

        </div>
    </>);
}

export default ProjectPreview;