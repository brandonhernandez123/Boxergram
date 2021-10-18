import React,{useState} from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import Client from '../services'




const UpdatePost = (props) => {
    const [updatePost, SetUpdatedPost] = useState({
        title: '',
        caption: '',
        image: '',
        id: props.userPosts.id

    })


    const onSubmit = async () => {
        try {
           const res = await Client.put(`/updatepost/${props.userPosts.id}`, updatePost) 
        } catch (error) {
            throw error
        }
    }

    const handleChangeTitle = (e) => {
        SetUpdatedPost({...updatePost, title: e.target.value})
    }

    const handleChangeCaption = (e) => {
        SetUpdatedPost({...updatePost, caption: e.target.value})
    }

    const handleChangeImage = (e) => {
        SetUpdatedPost({...updatePost, image: e.target.value})
    }

    
    
    
    return(
        <div>
<Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='newevent'>
        <Modal.Title id="contained-modal-title-vcenter">
          Update post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='newevent'>
      <Form onSubmit={onSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control type="input" name='title' onChange={handleChangeTitle} defaultValue={props.userPosts.title} placeholder="Title" />
    <Form.Text className="text-muted">
      Update title?
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Caption</Form.Label>
    <Form.Control type="input" name='caption' onChange={handleChangeCaption} defaultValue={props.userPosts.caption} placeholder="Caption" />
    <Form.Text className="text-muted">
      Update Caption?
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Image url</Form.Label>
    <Form.Control type="input" name='image' onChange={handleChangeImage} defaultValue={props.userPosts.image} placeholder="Update Image Url" />
    <Form.Text className="text-muted">
      Update image url?
    </Form.Text>
  </Form.Group>

  
  <Button variant="danger" type="submit">
    Submit
  </Button>
</Form>
      </Modal.Body>
      <Modal.Footer className='newevent'>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}


export default UpdatePost