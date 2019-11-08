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
                            <p className="about-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor sit amet erat a eleifend. Aenean varius condimentum ultrices. Morbi ornare sollicitudin tristique. Sed semper neque a fermentum eleifend. Morbi tempor purus neque, quis rutrum nisi rhoncus et. In rhoncus mi at nisl malesuada, a pretium nisi vulputate. Vestibulum sit amet magna imperdiet, auctor mauris eget, viverra orci. Cras non metus a lacus hendrerit congue at ac lacus.</p>
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