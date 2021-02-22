import React from 'react';
import {Form, Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import styled from 'styled-components';
import ListGroup from 'react-bootstrap/ListGroup'
import { SocialIcon } from 'react-social-icons';

const Footerpage = () => {
  return (
    <footer bg="light" variant="light" className="footer-container">
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <SocialIcon url="http://linkedin.com" />
          <SocialIcon network="twitter" />
          <SocialIcon network="medium" />
          <SocialIcon network="facebook" />
        </div>
        <div className="col-sm">

        <ul className="list">
        <h5>Support</h5>
          <li className="list-unstyled">
            <a href="#!">Reward Program</a>
          </li>
          <li className="list-unstyled">
            <a href="#!">Site Map</a>
          </li>
          </ul>
        </div>
        <div className="col-sm">

        <ul className="list">
        <h5>Company</h5>
          <li className="list-unstyled">
            <a href="#!">Reward Program</a>
          </li>
          <li className="list-unstyled">
            <a href="#!">Site Map</a>
          </li>
          </ul>
        </div>
        <div className="mr-sm-2">

        <ul className="list">
        <h5>Terms & Policies</h5>
          <li className="list-unstyled">
            <a href="#!">Reward Program</a>
          </li>
          <li className="list-unstyled">
            <a href="#!">Site Map</a>
          </li>
          </ul>
        </div>
      </div>
    </div>

<div className="footer-copyright text-center py-3">&copy; {new Date().getFullYear()} Copyright: <a href='#'> ziczac.com </a></div>

    </footer>
  );
}

export default Footerpage;
