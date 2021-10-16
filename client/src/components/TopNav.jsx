import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

const TopNav = ({authenticated, user, handleLogOut}) => {
    console.log(user)
    return(
        <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">BoxerGram</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          
             
          
          </Nav>
          <Nav>
              {authenticated  ? <Nav.Link href='/login' onClick={handleLogOut}>Sign out</Nav.Link> : 
              <Nav.Link href="/login">Sign in</Nav.Link>
            //   <Nav.Link eventKey={2} href="/register">
            //   Register
            // </Nav.Link>
               }
               {authenticated  ? null :<Nav.Link href='/register'>Register</Nav.Link> }
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>  
      </header>
    )
}


export default TopNav