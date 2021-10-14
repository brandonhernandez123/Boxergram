import React, {useEffect, useState} from 'react'
import Client from '../services'
import { Container, Row, Col,Image,Card, Button } from 'react-bootstrap'
import axios from 'axios'
import { BASE_URL } from '../globals'

const Feed = (props) => {
    const [posts, Setposts] = useState([])
    const [events, SetEvents] = useState([])

   
    useEffect(() => {
        async function getPosts(){
            const res = await axios.get(`${BASE_URL}/posts`)
            Setposts(res.data)
        }
        getPosts()
    },[])
return(
    <div>
        <h1>BoxerGram Feed</h1>
      
        {posts.map((post) =>(
    <div className="postcard">
        <Row xs={1} md={1} className="g-4">
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={`${post.image}`} />
        <Card.Body>
          <Card.Title> posted by {post.User.first_name} {post.User.last_name}</Card.Title>
          <Card.Text>
            {post.caption}
          </Card.Text>
        </Card.Body>
        <Button>Like</Button>
      <p>Likes:{post.likes}</p>
        <Button>Dislike</Button>
        <p>Dislikes: {post.dislikes}</p>
      </Card>
      
    </Col>
    
  ))}
</Row>
    </div>
         
        ))}
    
        
  
    </div>
)
}



export default Feed