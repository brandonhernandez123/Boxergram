import React,{useState,useEffect} from 'react'

import { Card, Row, Col } from 'react-bootstrap'
import Client from '../services'



const Event = (props) => {

    const [events, SetEvents] = useState([])
    const [Newevent, SetNewEvent] = useState({
      title: '',
      image: '',
      description: '',
      location: ''
    })

    useEffect(()=>{
        async function getEvents(){
            const res = await Client.get(`/events`)
            SetEvents(res.data)
        }
        getEvents()
        console.log(events)
    },[])


    const PostEvent = async () => {
      const res = await Client.post('/newpost')
    }

    
    return(
        <div>
          <h4 className="events">Welcome to BoxerGram Events!</h4>
          <p className="events">Have an event you want people to know about coming up?, is your local gym hosting amature bouts? Do you run a gym
            and have event you want to promote? BoxerGram events is where you want to post that and get people showing up!
          </p>
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