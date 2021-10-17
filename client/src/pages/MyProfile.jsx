import React,{useState, useEffect} from 'react'
import Client from '../services'
import {Row,Col,Container,Image,Card,Button} from 'react-bootstrap'


const MyProfile = (props) => {
    const [getProfile, SetUserProfile] = useState([])
    

    useEffect(() => {
        async function Profile(){
            const res = await Client.get(`/profile/${props.user.id}`)
            SetUserProfile(res.data)
            console.log(res.data)
        }
        Profile()
    },[])


    
    
    
    
    return(
        <div>
      
        {getProfile.map((profile) =>(
    <div className="profilepage">
     <Container>
  
    <Col>
      <Image src={`${profile.profile_picture}`} roundedCircle />
    </Col>
    
</Container>
    </div>
         
        ))}
    
        
  
    </div>
    )
}



export default MyProfile