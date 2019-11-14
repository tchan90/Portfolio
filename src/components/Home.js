import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import { Element} from 'react-scroll'


class Home extends Component {
    render() {
        return ( 
            <Element name="home"> 
            <div className="bg-purple">
                <Container fluid className="welcome-title"> 
                <h1>Hi my name is <strong>Tammy Chan,</strong></h1>
                <h1>and I'm a Web Developer</h1>
                </Container>
                </div> 
                </Element>
        )
    }
}

export default Home;