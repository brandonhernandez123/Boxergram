import React,{useState} from 'react'
import Client from '../services'
import {Modal, Form, Button} from 'react-bootstrap'



const NewComment = (props) => {



    const  [comment, SetComment] = useState({
    comment: '',
    userId: props.user.id,
    postId: props.post.id
})



    async function onSubmit() {
        const res = await Client.post('/newcomment', comment)
    }







    return(
        <div>
<Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          New Comment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <Form>
       <Form.Control size="sm" type="text" placeholder="Comment" />
       </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}



export default NewComment