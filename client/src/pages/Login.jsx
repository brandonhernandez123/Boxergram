import React,{useState} from 'react'
import { Nav } from 'react-bootstrap'
import { SignInUser } from '../services/auth'




const Login = (props) => {
    const [formValues, setFormValues] = useState({ email: '', password: '' })

    const handleChange = (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      const payload = await SignInUser(formValues)
      setFormValues({ email: '', password: '' })
      props.setUser(payload)
      props.toggleAuthenticated(true)
      props.history.push('/feed')
    }


    return(
<div>
    <h2>Welcome to BoxerGram</h2>
        
<div className='login'>
    <h2>Sign in</h2>
    <form className='form' onSubmit={handleSubmit}>
        
    <input type="email" name='email' onChange={handleChange} value={formValues.email}  placeholder="Email"/>
   
    <input type="password" name='password' value={formValues.password} onChange={handleChange} placeholder="Password"/>
    <button disabled={!formValues.email || !formValues.password}> Sign in </button>
    </form>
   <p> Not Signed up yet? click <Nav.Link href='/register'>Here</Nav.Link> </p>
</div>
</div>
    )
}


export default Login