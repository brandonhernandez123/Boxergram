import React,{useState,useEffect} from 'react'

import { Card, Row, Col,Button, ListGroupItem, ListGroup } from 'react-bootstrap'
import Client from '../services'
import NewEvent from '../components/NewEvent'



const Event = (props) => {

    const [events, SetEvents] = useState([])
    const [modalShow, setModalShow] = React.useState(false);
    



    useEffect(()=>{
        async function getEvents(){
            const res = await Client.get(`/events`)
            SetEvents(res.data)
        }
        getEvents()
        console.log(events)
    },[])


   

    
    return(
        <div>
          <div className='newevent'>
          <h4>Welcome to <span className='boxer'>Boxer</span><span className='gram'>Gram</span> Events!</h4>
          <p>Have an event you want people to know about coming up?, is your local gym hosting amature bouts? Do you run a gym
            and have event you want to promote? BoxerGram events is where you want to post that and get people showing up!
          </p> 
          <Button variant="danger" onClick={() => setModalShow(true)}>
Create a new Event      </Button>
          </div>
         
      <NewEvent show={modalShow} onHide={() => setModalShow(false)}
 />
 <br/>
 <br/>
            {events.map((event) => (
         <div className="postcard">
         <Row xs={1} md={1} className="g-4">
   {Array.from({ length: 1 }).map((_, idx) => (
     <Col>
       <Card>
         <Card.Img variant="top" src={`${event.image}`} />
         <Card.Body className ='newevent'>
           <Card.Title>{event.title}</Card.Title>
           <Card.Text>
             {event.description}
           </Card.Text>  
           <Card.Text>
             Location: {event.location}
           </Card.Text>  
         
         </Card.Body>
        
       </Card>
       <br/>
     </Col>
    
     
   ))}
 </Row>
     </div>
     
            
            ))}
        </div>

    )
}


export default Event