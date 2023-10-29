import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import useLogout from '../hooks/useLogout';
function Header() {
    let navigate = useNavigate()
    let logout = useLogout()
    let create = async()=>{
        try {
            navigate('/')
            logout()
            
        } catch (error) {
            toast.error(error.response.data.message)
        }
}
  return <>
  <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>create()}>Create User</Nav.Link>
            <Nav.Item><Button onClick={()=>logout()}>Logout</Button></Nav.Item>
          </Nav>
        </Container>
      </Navbar>
  </>
}

export default Header