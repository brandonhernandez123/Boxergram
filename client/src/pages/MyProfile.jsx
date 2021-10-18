import React,{useState, useEffect} from 'react'
import Client from '../services'
import {Row,Col,Container,Image,Card,Button, Alert} from 'react-bootstrap'



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

    const DeletePost = async (index) => {
        const id = `${userPosts[index].id}`
          const res = Client.delete(`/deletepost/${id}`)
          alert('Post Deleted')
          props.history.push('/feed')
        }
    
    console.log(userPosts.title)
    return(
        <div>
<Container>
  
    <Col>
      <Image  className='profilepic'  src={`${getProfile.profile_picture}`} roundedCircle />
      <h2>{getProfile.first_name} {getProfile.last_name}</h2>
      <h4>{getProfile.email}</h4>

<br/>
{userPosts.map((post,index) => (
    <div className="postcard">
        <Row xs={1} md={1} className="g-4">
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
          <Button onClick={()=>DeletePost(index)} variant='danger'>Delete</Button>
        <Card.Img variant="top" src={`${post.image}`} />
        <Card.Body className='newevent'>
          <Card.Title> {post.title}</Card.Title>
          <Card.Text>
            {post.caption}
          </Card.Text>  
         
        
        </Card.Body>
      
      </Card>
      
    </Col>
    
  ))}
</Row>
    </div>
         
        ))}
   



    </Col>
   
 
</Container>
        </div>
    )
}



export default MyProfile