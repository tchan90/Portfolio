import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {ReactComponent as Avatar} from './avatar.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import { Element} from 'react-scroll'


import './avatar.css'

 class About extends Component {
    render() {
        return (
            <Element name="about">
            <div className= 'about'>
                <ScrollAnimation animateIn="bounceInRight">
               <div className="heading-dark">About</div>
               </ScrollAnimation>
                <Container>
                    <Row>
                        <Col sm={12} lg={6}>
                            <ScrollAnimation animateIn="fadeInLeft">
                        <Avatar className="avatar-spacing" />
                        </ScrollAnimation>
                        </Col>
                        <Col sm={12} lg={6} >
                        <ScrollAnimation animateIn="fadeIn">
                            <p className="about-text" >Hi there! My name is Tammy and I'm a web developer fresh out from coding  school. My interests lie in design and front-end development, and my ambition is to create websites driven strongly by effective UX/UI experiences.</p>
                            </ScrollAnimation>
                        </Col>
                       
                    </Row>
                    </Container>
            </div>
            </Element>
        )
    }
}

export default About;