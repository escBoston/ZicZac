import React, { useEffect, useState } from "react";
import {Form, Nav, Dropdown, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
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
    <Navbar style={{paddingLeft: "90px", paddingRight: "150px"}}>
    <Navbar.Brand href="#home"><img className="logo" src={logo} alt="Logo" /></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link className="header_link" href="../Home">Home</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" onChange={handleQueryChange} value={query} placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-danger" onClick={() => search(query)}>Search</Button>
    </Form>
    <Nav className="ml-auto">
    <Dropdown>
  <Dropdown.Toggle style={{  background: "transparent", border: "none", color: "black"}}>
    My Account
  </Dropdown.Toggle>

  <Dropdown.Menu className="my-dropdown">
    <Dropdown.Item href="../Signin">Login</Dropdown.Item>
    <Dropdown.Item href="../Signup">Signup</Dropdown.Item>
    <Dropdown.Item href="../Sell">Sell my product</Dropdown.Item>
    <Dropdown.Item href="../Messages">My messages</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    </Nav>
  </Navbar>
  )
}


export default Header
