import React,{useState} from 'react'
import Client from '../services'
import {Modal, Form, Button} from 'react-bootstrap'



const NewEvent = (props) => {
    const [NewEvent, SetNewEvent] = useState({
        title: '',
        description: '',
        image: '',
        location: ''
    })


    const OnSubmit = async () => {
        const res = await Client.post('/newevent', NewEvent)
    }


const handleChangeTitle = (e) => {
    SetNewEvent({...NewEvent, title: e.target.value})
}
const handleChangeDescription = (e) => {
    SetNewEvent({...NewEvent, description: e.target.value})
}
const handleChangeImage = (e) => {
    SetNewEvent({...NewEvent, image: e.target.value})
}
const handleChangeLocation = (e) => {
    SetNewEvent({...NewEvent, location: e.target.value})
}



return(
    <div>
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
     
    >
      <Modal.Header className='newevent' >
        <Modal.Title   id="contained-modal-title-vcenter">
            Create New Event
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='newevent'>
      <Form onSubmit={OnSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Event Title</Form.Label>
    <Form.Control type="input" required='true'  onChange={handleChangeTitle} name='title' placeholder="What is the name of your event" />
    <Form.Text className="text-muted">
Give your event an engaging name    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Description</Form.Label>
    <Form.Control type="input" required='true'  onChange={handleChangeDescription} name='description' placeholder="Give a brief description of your event and when it takes place" />
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Image</Form.Label>
    <Form.Control type="input" required='true'  onChange={handleChangeImage} name='Image' placeholder="Include an image url for you event" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Location</Form.Label>
    <Form.Control type="input" required='true'  onChange={handleChangeLocation} name='location' placeholder="Where is your Event located at include the entire address" />
  </Form.Group>

  <Button disabled={!NewEvent.title || !NewEvent.image || !NewEvent.description || !NewEvent.location } variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </Modal.Body>
      <Modal.Footer className='newevent'>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
)}








export default NewEvent