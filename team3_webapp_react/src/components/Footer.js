import React from 'react';
import {Form, Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import styled from 'styled-components';
import ListGroup from 'react-bootstrap/ListGroup'
import { SocialIcon } from 'react-social-icons';

const Footerpage = () => {
  return (
    <footer class="text-center text-white" className="footer-container" style="background-color: #363b3f">
      <div className="container">
        <section class=" ">
          <p class="d-flex justify-content-center align-items-center">
            <span class="me-3" style="color:rgb(255,255,255);font-size:160%;font-family:DejaVu Sans Mono">
               Register for free
            </span>
            <button className="button" style="border: 2px solid grey;border-radius:10%;background-color:#363b3f;color:white;font-size:100%;font-family:DejaVu Sans Mono">
                Sign Up!
            </button>
            <button className="button" style="border: 2px solid grey;border-radius:10%;background-color:#363b3f;color:white;font-size:100%;font-family:DejaVu Sans Mono">
                Contact Us!
            </button>
          </p>
        </section>
      </div>

      <small>
        <div className="footer-copyright text-center py-3" style="color:white">&copy; {new Date().getFullYear()} Copyright: <a href='#' style="color:orange"> ziczac.com </a></div>
      </small>
     </footer>
  );
}

export default Footerpage;
