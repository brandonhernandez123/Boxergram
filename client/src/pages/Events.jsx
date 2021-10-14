import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { Card, Row, Col } from 'react-bootstrap'



const Event = (props) => {

    const [events, SetEvents] = useState([])

    useEffect(()=>{
        async function getEvents(){
            const res = await axios.get(`${BASE_URL}/events`)
            SetEvents(res.data)
        }
        getEvents()
        console.log(events)
    },[])
    return(
        <div>
            {events.map((event) => (
                <Card className="bg-dark text-white">
                <Card.Img src={`${event.image}`}alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text>
                    {event.description}
                  </Card.Text>
                  <Card.Text>{event.location}</Card.Text>
                </Card.ImgOverlay>
              </Card>
            ))}
        </div>

    )
}


export default Event