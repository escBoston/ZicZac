import React, { useEffect, useState } from "react";
import {Form, Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import styled from 'styled-components';
import logo from './zigzag_logo.png';
import {
  Link,
  useHistory
} from "react-router-dom";

const Header = (props) => {
  const history = useHistory();
  const [query, setQuery] = useState('')

  function search(query) {
    history.push({
      pathname: "./Search",
      query: query
    });
  }

  const handleQueryChange = (e) => {
    setQuery(e.target.value)
  }

  return(
    <Navbar>
    <Navbar.Brand href="#home"><img className="logo" src={logo} alt="Logo" /></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link className="header_link" href="../Home">Home</Nav.Link>
      <Nav.Link className="header_link" href="../Products">Products</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" onChange={handleQueryChange} value={query} placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-danger" onClick={() => search(query)}>Search</Button>
    </Form>
    <Nav className="ml-auto">
      <Nav.Link className="header_link" href="../Deals">Deals</Nav.Link>
      <Nav.Link className="header_link" href="../Account">Account</Nav.Link>
    </Nav>
  </Navbar>
  )
}


export default Header
