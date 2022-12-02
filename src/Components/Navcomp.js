import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import photoLogo from '../assets/logo.png'

const Navcomp = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt="logo"
                            src={photoLogo}
                            width="40"
                            height="40"
                            margin-right="5px"
                            className="d-inline-block align-top"
                        /> Photo Gallery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={NavLink} to="/About">About us</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact">Contact us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navcomp