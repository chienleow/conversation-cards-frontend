import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBar(props) {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">DIY Conversation Cards</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/start-game">Start Game</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
