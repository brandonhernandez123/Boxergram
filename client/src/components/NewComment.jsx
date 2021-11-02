import React,{useState} from 'react'
import Client from '../services'
import {Modal, Form, Button} from 'react-bootstrap'



const NewComment = (props) => {



    const  [comment, SetComment] = useState({
    comment: '',
    userId: props.user,
    postId: props.post.id
})

console.log(props.post.id)



    const onSubmit= async() => {
        const res = await Client.post('/newcomment', {
            comment: comment.comment,
            userId: props.user,
            postId: props.post.id
        })
    }


    const handleChange = (e) => {
        SetComment({...comment, [e.target.name]: e.target.value})
    }






    return(
        <div>
<Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='newevent'>
        <Modal.Title id="contained-modal-title-vcenter">
          New Comment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='newevent'>
       <Form onSubmit={onSubmit}>
       <Form.Control onChange={handleChange} size="sm" name='comment' type="text" placeholder="Comment" />
       <Button type='submit' disabled={!comment.comment}>Submit</Button>
       </Form>
      </Modal.Body>
      <Modal.Footer className='newevent'>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}



export default NewComment