import React, { Component } from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { Element} from 'react-scroll';

 class Skills extends Component {
    render() {
        return (
            <Element name="skills">
            <div className= 'bg-skills text-center'>
                <ScrollAnimation animateIn="fadeInDown">
                <div className="heading-light">Skills</div>
                </ScrollAnimation>
                <div className='skills-wrapper py-5'> 
                <Container fluid> 
                  <Row>
                      <Col lg="4" className="px-4">
                          <p className="skills-head">HTML</p>
                        <img src="https://res.cloudinary.com/ddzbntqlz/image/upload/v1573690958/html-skills_h20dad.png" className="skills-img" alt="html skills"/>
                        <ul className="list-style">
                            <li>HTML5</li>
                            <li>-</li>
                            <li>JSX</li>
                            <li>-</li>
                            <li>PUG</li>
                        </ul>
                      </Col>
                      <Col lg="4" className="px-4 skills-resp">
                      <p className="skills-head">Design</p>
                        <img src="https://res.cloudinary.com/ddzbntqlz/image/upload/v1573690958/design-skills_qcgj69.png" className="skills-img" alt="design skills"/>
                        <ul className="list-style">
                            <li>CSS3</li>
                            <li>-</li>
                            <li>SASS</li>
                            <li>-</li>
                            <li>Bootstrap</li>
                            <li>-</li>
                            <li>Adobe Photoshop</li>
                            <li>-</li>
                            <li>Adobe Illustrator</li>
                        </ul>
                      </Col>
                      <Col lg="4" className="px-4 skills-resp">
                      <p className="skills-head">Language</p>
                        <img src="https://res.cloudinary.com/ddzbntqlz/image/upload/v1573690958/lang-skills_khkwcx.png" className="skills-img" alt="language skills"/>
                        <ul className="list-style">
                            <li>jQuery</li>
                            <li>-</li>
                            <li>NodeJS</li>
                            <li>-</li>
                            <li>React</li>
                            <li>-</li>
                            <li>Vue</li>
                        </ul>
                      </Col>
                  </Row>
                  <Row className="skillsSecRow">
                      <Col lg="4" className="px-4">
                      <p className="skills-head">Database</p>
                        <img src="https://res.cloudinary.com/ddzbntqlz/image/upload/v1573690958/db-skills_n5f65t.png" className="skills-img" alt="database skills"/>
                        <ul className="list-style">
                            <li>MongoDB</li>
                            <li>-</li>
                            <li>Firebase</li>
                            <li>-</li>
                            <li>MySQL</li>
                        </ul>
                      </Col>
                      <Col lg="4" className="px-4 skills-resp">
                      <p className="skills-head">Sharing</p>
                        <img src="https://res.cloudinary.com/ddzbntqlz/image/upload/v1573690958/share-skills_rcqo4j.png" className="skills-img" alt="share skills"/>
                        <ul className="list-style">
                            <li>GitHub</li>
                        </ul>
                      </Col >
                      <Col lg="4" className="px-4 skills-resp">
                      <p className="skills-head">CMS</p>
                        <img src="https://res.cloudinary.com/ddzbntqlz/image/upload/v1573690958/cms-skills_ler8up.png" className="skills-img" alt="cms skills"/>
                        <ul className="list-style">
                            <li>Wordpress</li>
                        </ul>
                      </Col>
                  </Row>
                </Container>    
                </div>
                <p style={{ fontSize:'12px', marginTop:'20px' }}>*All logos belong to their respective companies</p>
            </div>
            </Element>
        )
    }
}

export default Skills;