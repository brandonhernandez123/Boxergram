import React from 'react'
import { Modal, Button } from 'react-bootstrap'




const ViewComments = (props) => {
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
          Comments
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='newevent'>
      <p>{props.comment}</p>
      </Modal.Body>
      <Modal.Footer className='newevent'>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}




export default ViewComments