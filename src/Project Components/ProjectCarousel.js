import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projectsData';


export default class ProjectCarousel extends Component {
  constructor(props){
    super(props);
    this.state={
      projects: projectsData.projects,
      project: projectsData.projects[0]
    }
  }
//buttons for Carousel
nextProject = () => {
  const newIndex = this.state.project.index+1;
  this.setState({
    project: projectsData.projects[newIndex]
  })
}
prevProject = () => {
  const newIndex = this.state.project.index-1;
  this.setState({
    project:projectsData.projects[newIndex]
  })
}

  render() {
    const {projects,project} = this.state;
    return (
      <div>
        <div className={`cards-slider active-slide-${project.index}`}>
          <div className="cards-slider-wrapper" style={{
                  'transform': `translateX(-${project.index*(100/projects.length)}%)`
                }}>
            {
              projects.map(project => <ProjectCard project = {project} key={project._id}/>)
            }
          </div>
        </div>

    {/*Direction Buttons*/}
        <div className="direction-btn-align"> 
        <Button onClick={() => this.prevProject()} disabled={project.index === 0} className="mx-1 direction-btns">Previous</Button>
        <Button onClick={() => this.nextProject()} disabled={project.index === projectsData.projects.length-1} className="mx-1 direction-btns">Next</Button>
        </div>      
      </div>
    )
  }
}
