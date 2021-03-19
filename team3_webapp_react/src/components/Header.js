import React from 'react';
import {Form, Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import styled from 'styled-components';
import logo from './zigzag_logo.png';

const Header = () => {
  return(
    <Navbar>
    <Navbar.Brand href="#home"><img className="logo" src={logo} alt="Logo" /></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link className="header_link" href="../Home">Home</Nav.Link>
      <Nav.Link className="header_link" href="../Products">Products</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-danger">Search</Button>
    </Form>
    <Nav className="ml-auto">
      <Nav.Link className="header_link" href="../Deals">Deals</Nav.Link>
      <Nav.Link className="header_link" href="../Account">Account</Nav.Link>
    </Nav>
  </Navbar>
  )
}


export default Header
