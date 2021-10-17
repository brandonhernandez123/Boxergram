import React,{useState} from 'react'
import Client from '../services'
import {Modal} from 'react-bootstrap'



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
}

const handleChange = (e) => {
    SetNewEvent({...NewEvent, [e.target.name]: e.target.value})
}



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
            Create New Event
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Event Title</Form.Label>
    <Form.Control type="input" required='true' name='title' placeholder="What is the name of your event" />
    <Form.Text className="text-muted">
Give your event an engaging name    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Description</Form.Label>
    <Form.Control type="input" required='true' name='description' placeholder="Give a brief description of your event and when it takes place" />
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Image</Form.Label>
    <Form.Control type="input" required='true' name='Image' placeholder="Include an image url for you event" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Location</Form.Label>
    <Form.Control type="input" required='true' name='location' placeholder="Where is your Event located at include the entire address" />
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







export default NewEvent