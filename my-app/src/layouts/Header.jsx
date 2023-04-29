import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div> 
          <Navbar bg="danger" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><Link to ="/" className='text-white fs-5'> Home </Link></Nav.Link>  

            <Nav.Link ><Link to = "/show-books" className='text-white fs-5 '>Show Books</Link></Nav.Link>
            <Nav.Link ><Link to = "/add-books" className='text-white fs-5 '>Add Books</Link></Nav.Link>


            
          </Nav>
        </Container>
      </Navbar>
</div>
  )
}

export default Header;