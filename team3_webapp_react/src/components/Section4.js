import React, { useEffect, useState } from "react";
import {Card, Form, Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Panel, FormGroup, FormControl} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import {
  Link,
  useHistory
} from "react-router-dom";
import styled from 'styled-components';
import { Grid } from 'gymnast'
import photo10 from './categoryimg/photo10.jpg'

const Section4 = (props) => {
  return(
    <div className="section4">
    <Grid className="grid_section4" >
    <Grid  size={2} margin={9} className="grid">
    <img style={{width: 100, height: 100}}
    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg' />
    </Grid>
    <Grid size={8} align={'center'} justify={'center'} margin={2} className="grid">

    <Card border="0" style={{ width: '40rem' }}>
      <Card.Body>
        <Card.Title>Sell</Card.Title>
        <Card.Text>
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
        </Card.Text>
        <Card.Link href="#"><Button variant="outline-danger">Start Selling</Button>{' '}</Card.Link>
      </Card.Body>
    </Card>
    </Grid>

    <Grid size={8} margin={2} className="grid grid_section1">
    <Card border="0" style={{ width: '40rem' }}>
    <Card.Body>
      <Card.Title>Buy</Card.Title>
      <Card.Text>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
      </Card.Text>
      <Card.Link href="#"><Card.Link href="#"><Button variant="outline-danger">Start Buying</Button>{' '}</Card.Link></Card.Link>
    </Card.Body>
    </Card>
    </Grid>
    <Grid size={2} margin={2} className="grid">
    <img style={{width: 200, height: 300}}
    src={photo10} />
    </Grid>
    <Grid size={2} margin={9} className="grid grid_section1">
    <img style={{width: 100, height: 100}}
    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg' />
    </Grid>

    <Grid size={8} align={'center'} justify={'center'} margin={2} className="grid">
    <Card border="0" style={{ width: '40rem' }}>
    <Card.Body>
      <Card.Title>Meet your Community</Card.Title>
      <Card.Text>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
      </Card.Text>
      <Card.Link href="#"><Card.Link href="#"><Button variant="outline-danger">Learn More</Button>{' '}</Card.Link></Card.Link>
    </Card.Body>
    </Card>
    </Grid>
    <Grid className="grid_section1"  margin={2} align="center" className="grid">
    <Card border="0" style={{ width: '40rem' }}>
    <Card.Body>
      <Card.Title>Protect Environment</Card.Title>
      <Card.Text>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
      </Card.Text>
      <Card.Link href="#"><Card.Link href="#"><Button variant="outline-danger">Read our Blog</Button>{' '}</Card.Link></Card.Link>
    </Card.Body>
    </Card>
    <Grid size={2} margin={9} className="grid">
    <img style={{width: 100, height: 100}}
    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg' />
    </Grid>
    </Grid>
    </Grid>
    </div>
  );
}

export default Section4
