import React, { Component } from 'react';
import { Form, Container, Row, Col, InputGroup} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faAt, faPenAlt, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames'

class ContactForm extends Component {
  state={
      name:'',
      email:'',
      message:'',
      errors:{},
      errorServer:false,
      submissionSucc: false
  }
  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

 handleSubmit= (e)=>{
    e.preventDefault();
    const {name, email, message} = this.state;
    //check errors
    if(name===''){
      this.setState({
        errors:{name:'Woops forgot your name!'}
      });
      return;
    }
    if(email===''){
      this.setState({
        errors:{email:'Woops forgot your email!'}
      });
      return;
    }
    if(message===''){
      this.setState({
        errors:{message:'Woops forgot your message!'}
      });
      return;
    }
    
      const templateId = 'template_SFAg1m3i';
      this.sendFeedback(templateId, {
        message_html: this.state.message, from_name:this.state.name, reply_to:this.state.email
      })
      this.setState({
        name:"",
        email:"",
        message:""
      })
      this.setState({submissionSucc:true})
    }
    sendFeedback(templateId, variables){
      window.emailjs.send(
        'gmail',templateId,variables)
        .then(res=>{
          console.log('Email successfully sent')
        })
        .catch(err=>console.error('Error occured:', err))
      
    }
    
  render() {
    const {name, email, message, errors, submissionSucc} = this.state;
    return (
      <div className={(this.props.formDisplay ? '' : 'contact-form-hide')} >
          <Container className="contactForm-container py-4 my-4 fadeInLeft fadeOutRight border rounded">
              <Row>
                  <Col className="mx-auto d-block">
                  <Form onSubmit={this.handleSubmit.bind(this)}> 
          <Form.Group id="contactForm" >
                      <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend"><span><FontAwesomeIcon icon={faUser} color="#3F217E" /></span></InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control name="name" value={name} type="text" placeholder="Name" className={classnames("shadow rounded-lg pb-2", {'is-invalid':errors.name})} onChange={this.handleChange}/>
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </InputGroup>
          </Form.Group>
          <Form.Group>
          <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend"><span><FontAwesomeIcon icon={faAt} color="#3F217E" /></span></InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control name="email" value={email} type="email" placeholder="Email" className={classnames("shadow rounded-lg pb-2", {'is-invalid':errors.email})}  onChange={this.handleChange}/>
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </InputGroup>
          </Form.Group>

          <Form.Group>
          <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend"><span><FontAwesomeIcon icon={faPenAlt} color="#3F217E" /></span></InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control name="message" value={message} as="textarea" rows="5" placeholder="Message" className={classnames("shadow rounded-lg pb-2", {'is-invalid':errors.message})}   onChange={this.handleChange}/>
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </InputGroup>
          </Form.Group>
        <div className="text-center contact-text"> 
        <button className="submitBtn" type="submit" >
            Submit
          </button>
          </div>
        </Form>
                  </Col>
              </Row>
          {submissionSucc===true? <div className="alert alert-success mt-3" role="alert" ><span><FontAwesomeIcon icon={faThumbsUp} color="green"/></span>
   <p> Submission successful. I will get back to you very soon!</p></div> : ''}
          </Container>
        
      </div>
    );
  }
}

export default ContactForm;
