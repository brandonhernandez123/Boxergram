import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Register from './Register'



const Login = () => {
    return(
<div>
    <h2>Welcome to BoxerGram</h2>
        
<div className='login'>
    <h2>Sign in</h2>
    <form className='form'>
        
    <input type="email"  placeholder="Email"/>
   
    <input type="password" placeholder="Password"/>
    <input type="submit" value="Sign In" className="submit"/>
    </form>
   <p> Not Signed up yet? click <Nav.Link href='/register'>Here</Nav.Link> </p>
</div>
</div>
    )
}


export default Login