import React, { Component } from 'react';
import {Container} from 'react-bootstrap'
import ProjectCarousel from '../Project Components/ProjectCarousel';

import ScrollAnimation from 'react-animate-on-scroll';
import { Element} from 'react-scroll'

 
class Projects extends Component {
    
    render() {
        return (
            <Element name="projects"> 
            <div className= 'projects-bg'>
                <ScrollAnimation animateIn="fadeInDown">
                <div className="heading-dark text-center">Projects</div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn">
                <Container fluid className="py-4" style={{'overflow':'hidden'}}>      
                    <ProjectCarousel />
                </Container>
                </ScrollAnimation>
            </div>
            </Element>
        )
    }
}

export default  Projects;