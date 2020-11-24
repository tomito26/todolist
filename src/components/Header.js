import React from 'react'
import {Container,Navbar} from 'react-bootstrap'


function Header(){
    return(
        <div>
    <Container>
        <Navbar expand="lg" variant="light" bg="info" className='m-auto'>
            <Navbar.Brand href="#" className='ml-5 pl-5'>To Do List</Navbar.Brand>
        </Navbar>
    </Container>
        </div>
    )
}

export default Header