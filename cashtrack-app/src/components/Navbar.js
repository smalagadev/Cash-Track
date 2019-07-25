import React from 'react';
import {Nav , Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
    background-color: #222;
}

.navbar-brand, .navbar-nav .nav-link {
    color; #bbb;

    &:hover{
        color: white;
    }
 }
`;

export const Navigationbar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href = "/">Cash Track</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id ="basic-navbar-nav">
                <Nav className= "m1-auto">
                    <Nav.Item><Nav.Link href = "/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href = "/Setting">Setting</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href = "/Profile">Profile</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)
 