import React, { Component } from 'react';

import {Container, Col, Row, Button} from 'react-bootstrap';
import {IoLogoLinkedin} from 'react-icons/io';
import {DiGithubAlt} from 'react-icons/di';
import ContactForm from './Contact-form';
import { Element} from 'react-scroll';


class Contact extends Component {
    constructor() {
        super();
        this.state = {
          formDisplay: false,
        };
        this.toggleForm = this.toggleForm.bind(this);
    }


    toggleForm(){
        this.setState({
        formDisplay: !this.state.formDisplay
        })
      }
    

    render() {
        return (
            <Element name="contact"> 
            <div className= 'contact-bg'>
                <div className="titles-white text-center">Contact</div>
                <Container>
                    <Row>
                        <Col>
                        <h2 className='contact-header'>Still interested? Feel free to contact me!</h2>
                        <Button variant="outline-light" size="lg" className="mx-auto d-block mt-5 mb-3" onClick={this.toggleForm}>Contact</Button>
                        </Col>
                       
                    </Row>
                    
                        <ContactForm formDisplay= {this.state.formDisplay}/>
                         
                    <Row>
                        <Col><a href="#"><IoLogoLinkedin color="white" size={57} className="ml-auto d-block mt-5 logo"/></a></Col>
                        <Col><a href="#"><DiGithubAlt  color="white" size={57} className="mr-auto d-block mt-5 logo"/></a></Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                        <p className='copyright-txt'>Copyright 2019</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            </Element>
        )
    }
}


export default Contact;