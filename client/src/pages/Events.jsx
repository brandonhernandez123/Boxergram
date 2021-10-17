import React,{useState,useEffect} from 'react'

import { Card, Row, Col,Button } from 'react-bootstrap'
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
          <h4 className="events">Welcome to BoxerGram Events!</h4>
          <p className="events">Have an event you want people to know about coming up?, is your local gym hosting amature bouts? Do you run a gym
            and have event you want to promote? BoxerGram events is where you want to post that and get people showing up!
          </p>
          <Button variant="danger" onClick={() => setModalShow(true)}>
Create a new Event      </Button>
      <NewEvent show={modalShow} onHide={() => setModalShow(false)}
 />
            {events.map((event) => (
               <Card>
               <Card.Img variant="top" src={`${event.image}`} />
               <Card.Body>
                 <Card.Text>
                   {event.title}
                 </Card.Text>
                 <Card.Text>
                   {event.descriptioin}
                 </Card.Text>
                 <Card.Text>
                   {event.location}
                 </Card.Text>
               </Card.Body>
             </Card>
            
            ))}
        </div>

    )
}


export default Event