import React,{useState, useEffect} from 'react'
import Client from '../services'
import {Row,Col,Container,Image,Card,Button} from 'react-bootstrap'
import UpdatePost from '../components/UpdatePost'



const MyProfile = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const [getProfile, SetUserProfile] = useState([])
    const [userPosts, SetUserPosts] = useState([])
    

    useEffect(() => {
        async function Profile(){
            const res = await Client.get(`/profile/${props.user.id}`)
            SetUserProfile(res.data)
            
            
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

  

    const DeletePost = async (index) => {
        const id = `${userPosts[index].id}`
          const res = Client.delete(`/deletepost/${id}`)
          alert('Post Deleted')
          props.history.push('/feed')
        }
    
    
    return(
        <div>
<Container>
  
    <Col>
      <Image  className='profilepic'  src={`${getProfile.profile_picture}`} roundedCircle />
      <h2>{getProfile.username}</h2>
      <h4>{getProfile.email}</h4>

<br/>
{userPosts.map((post,index) => (
    <div className="postcard">
        <Row xs={1} md={1} className="g-4">
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
      <Button variant="primary" onClick={() => setModalShow(true)}>
       Update post
      </Button>
     
          <Button onClick={()=>DeletePost(index)} variant='danger'>Delete</Button>
        <Card.Img variant="top" src={`${post.image}`} />
        <Card.Body className='newevent'>
          {/* <Card.Title> {post.title}</Card.Title> */}
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
<UpdatePost userPosts={userPosts} show={modalShow}
        onHide={() => setModalShow(false)} />
        </div>
    )
}



export default MyProfile