import React from 'react';
import {Form, Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import styled from 'styled-components';
import ListGroup from 'react-bootstrap/ListGroup'
import { SocialIcon } from 'react-social-icons';
import logo from './zigzaglogo_only.jpg';



const Footerpage = () => {
  return (
    <footer
        className="text-center text-white"
        classname="footer-container"
        style={{
          backgroundColor: "#363b3f",
          padding: "8% 15%",
          width: "100%"
        }}
      >
        <div classname="container">
          <div className="row">
            <div className="col-sm-2 col-md-3 item">
              <img src={logo} width="100" height="100" />
              <br />
              <br />
              <Link to="../ContactUs">
              <button
                classname="button"
                style={{
                  border: "2px solid grey",
                  borderRadius: "10%",
                  backgroundColor: "#363b3f",
                  color: "white",
                  fontSize: "100%",
                  fontFamily: "DejaVu Sans Mono"
                }}
              >
                Contact Us!
              </button>
              </Link>
            </div>
            <div className="col-sm-2 col-md-3 item">
              <div
                className="vl"
                style={{
                  borderLeft: "1px solid white",
                  height: "100%"
                }}
              />
            </div>
            <div className="col-sm-2 col-md-3 item">
              <span
                className="me-3"
                style={{
                  color: "rgb(255,255,255)",
                  fontSize: "150%",
                  fontFamily: "DejaVu Sans Mono"
                }}
              >
                Register for free
              </span>
              <br />
              <br />
              <Link to="../Signup">
              <button
                classname="button"

                style={{
                  border: "2px solid grey",
                  borderRadius: "10%",
                  backgroundColor: "#363b3f",
                  color: "white",
                  fontSize: "100%",
                  fontFamily: "DejaVu Sans Mono"
                }}
              >
                Sign Up!

              </button>
              </Link>
              <br />
              <br />
              <small
                style={{
                  position: "static"
                }}
              >
                <div
                  classname="footer-copyright text-center py-3"
                  style={{
                    color: "gold"
                  }}
                >
                  ©Copyright
                  <span
                    style={{
                      color: "white"
                    }}
                  >
                    :
                  </span>
                  <a
                    href="#"
                    style={{
                      color: "orange"
                    }}
                  >
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
