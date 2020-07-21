import React from 'react';
import ProjectPreview from './ProjectPreview';

const ProjectList = (props) => {
    const { projects } = props;
    console.log('num of projects', projects);
    return (<>
        {projects.map(project => <ProjectPreview project={project} key={project.id} />)}
    </>);
}

export default ProjectList;