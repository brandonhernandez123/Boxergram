import React,{useState} from 'react'
import { Modal, Button, Form } from 'react-bootstrap'




const UpdatePost = (props) => {
    
    
    
    
    return(
        <div>
<Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control type="input" name='title' placeholder="Title" />
    <Form.Text className="text-muted">
      Update title?
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Caption</Form.Label>
    <Form.Control type="input" name='caption' placeholder="Caption" />
    <Form.Text className="text-muted">
      Update Caption?
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Image url</Form.Label>
    <Form.Control type="input" name='image' placeholder="Update Image Url" />
    <Form.Text className="text-muted">
      Update image url?
    </Form.Text>
  </Form.Group>

  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}


export default UpdatePost