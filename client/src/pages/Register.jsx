import React from 'react'



const Register = () => {
    return(
    <div> 
        <h2>Welcome to BoxerGram</h2>
        <h4>Register</h4>
        <div>
   
        
<div className='login'>
    
    <form className='form'>
    <input type='text' placeholder="first Name"/>
    <input type='text' placeholder="Last name"/>

    <input type="email"  placeholder="Email"/>
    <p>Upload Profile Picture</p>
    <input type='file' placeholder="Upload profile picture" />
    
    <input type="password" placeholder="Password"/>
    <input type="submit" value="Sign In" className="submit"/>
    </form>
   
</div>
</div>
    </div>
    )
}


export default Register