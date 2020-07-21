import React, { Component } from 'react';

// Services
import projectService from '../services/project.services';

// Components 
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

class Main extends Component {
    state = {
        projects: []
    }

    async componentDidMount() {
        const projects = await projectService.query();
        this.setState({ projects });
        // console.log('Main', this.state.projects);
    }

    render() {
        return (<>
            <Navbar />
            <Home />
            <About />
            <Projects projects={this.state.projects} />
            <Experience />
            <Contact />
            <Footer />
        </>);
    }
}

export default Main;