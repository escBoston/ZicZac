import React from 'react';
import {Form, Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import styled from 'styled-components';
import logo from './zigzag_logo.png';

const Header = () => {
  return(
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home"><img className="logo" src={logo} alt="Logo" /></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="../Home">Home</Nav.Link>
      <Nav.Link href="../Products">Products</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
    <Nav className="ml-auto">
      <Nav.Link href="../Deals">Deals</Nav.Link>
      <Nav.Link href="../Account">Account</Nav.Link>
    </Nav>
  </Navbar>
  )
}


export default Header
