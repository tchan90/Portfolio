import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-scroll'


class Navigation extends Component {
  state = {
    isTop: true,
  };

  componentDidMount(){
    document.addEventListener('scroll',()=> {
      const isTop = window.scrollY < 600;
      if (isTop !== this.state.isTop) {
        this.setState({isTop})
      }
    });
  }
  
    render() {
        return (
            <div>
               <Navbar collapseOnSelect expand="lg" className={this.state.isTop ? 'nav-bg' : 'nav-bg-scrolling'} fixed="top">
                      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                      <Navbar.Collapse id="responsive-navbar-nav" className=" pl-3 py-3">
                        <Nav className="mr-auto">
                          <Link to="home" className="nav-link" spy={true} smooth={true} duration={500}>Home</Link>
                         <Link to="about"  className="nav-link" spy={true} smooth={true} duration={500}>About</Link>
                          <Link to="skills"  className="nav-link" spy={true} smooth={true} duration={500}>Skills</Link>
                         <Link to="projects"  className="nav-link" spy={true} smooth={true} duration={500}>Projects</Link>
                         <Link to="contact"  className="nav-link" spy={true} smooth={true} duration={500}> Contact</Link>

                        </Nav>
                        <Nav>
                          <Nav.Link href="https://res.cloudinary.com/ddzbntqlz/image/upload/v1580103300/Resume_-_Tammy_Chan_yvvcwk.pdf" target="_blank" rel="noopener noreferrer">Resume</Nav.Link>
                        </Nav>
                      </Navbar.Collapse>
                    </Navbar>  
            </div>
        )
    }
}

export default  Navigation;