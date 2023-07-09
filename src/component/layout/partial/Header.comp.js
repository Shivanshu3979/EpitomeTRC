import  React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../../../assets/img/logo.png';
import {useNavigate} from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'

export const Header=()=>{
    const history = useNavigate();
    const logMeOut = () =>{
        history.push("/");
    }
    return(
        <Navbar
            collapseOnSelect
            bg='info'
            variant="dark" expand="md">
            <Navbar.Brand>
                <img src={logo} alt="logo" width='50px'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    <LinkContainer to="/dashboard"><Nav.Link >Dashboard</Nav.Link></LinkContainer>
                    <LinkContainer to="/tickets"><Nav.Link >Tickets</Nav.Link></LinkContainer>
                    <LinkContainer to="" onClick={logMeOut}><Nav.Link >Logout</Nav.Link></LinkContainer>
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
    );
}