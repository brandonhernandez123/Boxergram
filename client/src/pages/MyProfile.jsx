import React,{useState, useEffect} from 'react'
import Client from '../services'
import {Row,Col,Container,Image,Card,Button} from 'react-bootstrap'


const MyProfile = (props) => {
    const [getProfile, SetUserProfile] = useState([])
    const [userPosts, SetUserPosts] = useState([])
    

    useEffect(() => {
        async function Profile(){
            const res = await Client.get(`/profile/${props.user.id}`)
            SetUserProfile(res.data)
            console.log(res.data)
            SetUserPosts(res.data.Posts)
            
        }
        Profile()
    },[])

    useEffect(() => {
        async function Posts(){
            const res = await await Client.get(`/profile/${props.user.id}`)
            SetUserPosts(res.data.Posts)
            
        }
        Posts()
    },[SetUserPosts])

    console.log('getprofile',getProfile)
    console.log('userposts', userPosts)
    
    
    console.log(userPosts.title)
    return(
        <div>
<Container>
  
    <Col>
      <Image  className='profilepic'  src={`${getProfile.profile_picture}`} roundedCircle />
      <h2>{getProfile.first_name} {getProfile.last_name}</h2>
      <h4>{getProfile.email}</h4>
<br/>
<br/>
<h2>My Posts</h2>
{userPosts.map((post) => (
    <div className='userposts'>

      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={`${post.image}`} />
  <Card.Body>
    <Card.Title>{post.title}</Card.Title>
    <Card.Text>
     {post.caption}
    </Card.Text>
    <Button variant="danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg></Button>
    <Button variant="info">Update Post</Button>
  </Card.Body>
</Card>
</div>
))}

    </Col>
   
 
</Container>
        </div>
    )
}



export default MyProfile