import React,{useState} from 'react'
import {RegisterUser} from '../services/auth'


const iState = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    profile_picture: ''
}
const Register = (props) => {
const [formValues, setFormValues] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    profile_picture: ''
})

const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})

}

const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
        first_name:formValues.first_name,
        last_name: formValues.last_name,
        email: formValues.email,
        password: formValues.password,
        profile_picture: formValues.profile_picture
    })
    setFormValues(iState)
    props.history.push('/login')
}

    return(
    <div> 
        <h2>Welcome to BoxerGram</h2>
        <h4>Register</h4>
        <div>
   
        
<div className='login'>
    
    <form className='form' onSubmit={handleSubmit}>
    <input type='text' name="first_name" value={formValues.first_name} placeholder="first Name" onChange={handleChange}/>
    <input type='text' name="last_name" value={formValues.last_name} placeholder="Last name" onChange={handleChange}/>

    <input type="email" name="email" value={formValues.email}  placeholder="Email" onChange={handleChange}/>
    <p>Upload Profile Picture</p>
    <input type='text' name="profile_picture" value={formValues.profile_picture} onChange={handleChange} placeholder="Host profile pic on imgur and paste image address link here" />
    
    <input type="password" name="password" value={formValues.password} placeholder="Password" onChange={handleChange}/>
    <button type="submit"  className="submit">Register</button>
    </form>
   
</div>
</div>
    </div>
    )
}


export default Register