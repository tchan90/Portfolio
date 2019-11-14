import React from 'react';
import {Container, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function Error() {
    return (
        <div className="error-bg"> 
       <Container className="py-4">
           <img src='https://res.cloudinary.com/ddzbntqlz/image/upload/v1573691322/errorImg_dsenxv.png'  alt='error image'/>
           <div className="text-center mt-2">
           <Link to="/"><Button variant="warning">L-l-lets take you back...</Button></Link>
           </div>
           </Container>
           </div>
    )
}
