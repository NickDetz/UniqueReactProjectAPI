import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'

 function HeaderNav() {
    return (
        <div>
            <Navbar bg="dark" variant="danger">
            <i className="fas fa-diagnoses fa-4x" style={{color : 'green'}}></i>
    <Navbar.Brand href="#home">Home Link</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Link1</Nav.Link>
      <Nav.Link href="#features">Link 2</Nav.Link>
      <Nav.Link href="#pricing">Link 3</Nav.Link>
    </Nav>
    
  </Navbar>
        </div>
    )
}

export default HeaderNav;
