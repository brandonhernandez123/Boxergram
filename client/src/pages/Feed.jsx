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
        <h4>{post.title}</h4>
        <h6>posted by @{post.User.first_name} {post.User.last_name}</h6>
        <Image  className="postimage" src={`${post.image}`} alt={post.title} />
        <p>{post.caption}</p>
    </div>
         
        ))}
    
        
  
    </div>
)
}



export default Feed