import React,{useState} from 'react'
import Client from '../services/index'
import {Modal, Button, Form} from 'react-bootstrap'



const UpdateEvent = (props) => {
const [updatedEvent, SetUpdatedEvent] = useState({
    title: props.title,
    description: props.description,
    image: props.image,
    location: props.location
})


const onSubmit = async () => {
    const res = await Client.put(`/updateevent/${props.id}`, updatedEvent)
    alert('event updated')
}

const handleChangeTitle = (e) => {
    SetUpdatedEvent({...updatedEvent, title: e.target.value})
}

const handleChangeDescription = (e) => {
    SetUpdatedEvent({...updatedEvent, description: e.target.value})
}

const handleChangeImage = (e) => {
    SetUpdatedEvent({...updatedEvent, image: e.target.value})
}

const handleChangeLocation = (e) => {
    SetUpdatedEvent({...updatedEvent, location: e.target.value})
}
console.log(updatedEvent)

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
            Update Event
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit={onSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" name='title' onChange={handleChangeTitle} defaultValue={props.title} placeholder="Update title?" />
    <Form.Text className="text-muted">
     Update title
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" name='description' onChange={handleChangeDescription} defaultValue={props.description} placeholder="Update description?" />
    <Form.Text className="text-muted">
     Update Description
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Image</Form.Label>
    <Form.Control type="text" name='image' onChange={handleChangeImage} defaultValue={props.image} placeholder="Update image?" />
    <Form.Text className="text-muted">
     Update image
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Location</Form.Label>
    <Form.Control type="text" name='title' onChange={handleChangeLocation} defaultValue={props.location} placeholder="Update location?" />
    <Form.Text className="text-muted">
     Update location
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


export default UpdateEvent