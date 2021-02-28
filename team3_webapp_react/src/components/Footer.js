import React from 'react';
import {Form, Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import styled from 'styled-components';
import ListGroup from 'react-bootstrap/ListGroup'
import { SocialIcon } from 'react-social-icons';

const Footerpage = () => {
  return (
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
    </head>
    <footer class="text-center text-white" className="footer-container" style="background-color: #363b3f; padding:100px 80px; width: 1024px">
       <div className="container">
         <div class="row">
            <div class="col-sm-2 col-md-3 item">
              <img src="./zigzaglogo_only.jpg" alt="zig zag logo" width="100" height="100">
              <button className="button" style="border: 2px solid grey;border-radius:10%;background-color:#363b3f;color:white;font-size:100%;font-family:DejaVu Sans Mono">
                Contact Us!
              </button>
            </div>
            <div class="col-sm-2 col-md-3 item">
              <div class="vl" style="border-left: 1px solid white;height: 160px"></div>
            </div>

            <div class="col-sm-2 col-md-3 item">
              <span class="me-3" style="color:rgb(255,255,255);font-size:150%;font-family:DejaVu Sans Mono">
                Register for free
              </span>
              <br><br>
              <button className="button" style="border: 2px solid grey;border-radius:10%;background-color:#363b3f;color:white;font-size:100%;font-family:DejaVu Sans Mono">
                Sign Up!
              </button>
              <br><br>
              <small style="position:static">
                  <div className="footer-copyright text-center py-3" style="color:gold">&copy;Copyright
                    <span style="color:white">:</span>
                    <a href='#' style="color:orange">
                      ziczac.com
                    </a>
                  </div>
               </small>
           </div>
         </div>

       </div>

     </footer>
  );
}

export default Footerpage;
