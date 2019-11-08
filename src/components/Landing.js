import React, { Component } from 'react';
import Navigation from './Navigation'
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

class Landing extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Home/>
                <About/>
                <Skills/>
                <Projects/>
                <Contact/>
            </div>
        )
    }
}
export default Landing