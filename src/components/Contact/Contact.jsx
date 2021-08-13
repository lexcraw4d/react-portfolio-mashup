import React from 'react'
import {Form, Container, Button} from 'react-bootstrap'

const Contact = () => {
    return (
        
    <Container>
    <div style={{textAlign: "center", margin: "10px"}}><h1>Let's Connect</h1></div>
      <Form>
        <Form.Group controlId="form.Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="form.Email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="form.Textarea">
            <Form.Label>Comment</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <Button style={{margin: "5px"}}variant="secondary" active>Submit</Button>{' '}
    </Container>
    );

    
}

export default Contact
