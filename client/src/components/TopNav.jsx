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
              {authenticated   ? <Nav.Link href='/login' onClick={handleLogOut}>Sign out</Nav.Link> : 
              <Nav.Link href="/login">Sign in</Nav.Link>
            //   <Nav.Link eventKey={2} href="/register">
            //   Register
            // </Nav.Link>
               }
               {authenticated  ? null :<Nav.Link href='/register'>Register</Nav.Link> }
          </Nav>
          <Nav.Link href='/events'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-calendar2-event-fill" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zM11.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
</svg></Nav.Link>
        </Navbar.Collapse>
        </Container>
      </Navbar>  
      </header>
    )
}


export default TopNav