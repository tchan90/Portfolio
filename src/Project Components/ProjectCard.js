import React from 'react';
import {Card, Button} from 'react-bootstrap';

 const ProjectCard = ({project}) => {
   const{index, name, about, image, website, github} = project;
   console.log(website)
    return (
        <section id={`card-${index}`}>
            <Card className="card-style">
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title><strong>{name}</strong></Card.Title>
    <Card.Text>
      {about}
    </Card.Text>
    <a href={website} target="_blank" rel="noopener noreferrer"><Button  className="mr-2 project-buttons">Website</Button></a>
    { github==null ? '' : <a href={github}  target="_blank" rel="noopener noreferrer"><Button  className="project-buttons">Github</Button></a>
    }
  </Card.Body>
</Card>
        </section>
    )
}

export default ProjectCard