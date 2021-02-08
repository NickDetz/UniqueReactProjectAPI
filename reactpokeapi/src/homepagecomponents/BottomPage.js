import React from 'react'
import './HomePage.css';
import {Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';

 const BottomPage = () => {
    return (
        <div >
         <Nav className='navbar-fixed-bottom' >
         <Navbar.Brand href="#home" className="mx-auto">
           <Link to='/'>Back To Home Page</Link>
           </Navbar.Brand>
        
         </Nav>
        </div>
    )
}

export default BottomPage;