import React,{useState} from 'react'
import Axios from 'axios'
import { BASE_URL } from '../globals'
import { Modal, Form, Row, Col, Button } from 'react-bootstrap'




const NewPost = (props) => {
const [newpost, Setnewpost] = useState({
    title: '',
    caption: '',
    image: '',
    userId: props.user.id
})

const handleSubmit = async (e) => {
      const res = await Axios.post(`${BASE_URL}/newpost`, {
        title: newpost.title,
        caption: newpost.caption,
        image: newpost.image,
        userId: props.user.id
    })
    props.history.push('/feed')
    
    
}

const handleChange = (e) => {
    Setnewpost({...newpost, [e.target.name]: e.target.value})
}


return(
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header className='newevent'>
      <Modal.Title id="contained-modal-title-vcenter">
        Create new post
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className='newevent'>
    <form onSubmit={handleSubmit}>
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      
    </Form.Label>
    <Col sm="10">
    </Col>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Post title</Form.Label>
    <Form.Control type="input" name='title' value={newpost.title} onChange={handleChange} placeholder="title" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Image Url</Form.Label>
    <Form.Control type="input" name='image' value={newpost.image} onChange={handleChange} placeholder="Image url" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Caption</Form.Label>
    <Form.Control name='caption' value={newpost.caption} onChange={handleChange} as="textarea" rows={3} />
  </Form.Group>
  <Button  variant='danger' type='submit'disable={!newpost.caption || !newpost.image || !newpost.title}>Post</Button>
</form>
    </Modal.Body>
    <Modal.Footer className='newevent'>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
)

}



export default NewPost
