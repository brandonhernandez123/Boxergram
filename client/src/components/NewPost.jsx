import React,{useEffect, useState} from 'react'
import Axios from 'axios'
import { BASE_URL } from '../globals'
import { Modal, Form, Row, Col, Button } from 'react-bootstrap'




const NewPost = (props) => {
const [newpost, Setnewpost] = useState({
    title: '',
    caption: '',
    image: '',
    userId: ''
})

const handleSubmit = async () => {
    const res = await Axios.post(`${BASE_URL}/newpost`, newpost)
    
}

const handleChange = (e) => {
    Setnewpost({...newpost, [e.target.name]: e.target.value})
}
const changeUser = () => {
    function change(){
       Setnewpost({
           userId: props.user.id
       })
    }
    return change()
}




console.log(props.user)
return(
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Create new post
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <form onSubmit={changeUser} onSubmit={handleSubmit}>
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      
    </Form.Label>
    <Col sm="10">
    </Col>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Post title</Form.Label>
    <Form.Control type="text" name='title' onChange={handleChange} placeholder="title" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Image Url</Form.Label>
    <Form.Control type="text" name='image' onChange={handleChange} placeholder="Image url" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Caption</Form.Label>
    <Form.Control name='caption' onChange={handleChange} as="textarea" rows={3} />
  </Form.Group>
  <Button type='submit'>Post</Button>
</form>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
)

}



export default NewPost
