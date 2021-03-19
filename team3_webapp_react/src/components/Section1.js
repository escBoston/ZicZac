import React, { useEffect, useState } from "react";
import {Card, Form, Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Panel, FormGroup, FormControl} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import {
  Link,
  useHistory
} from "react-router-dom";
import styled from 'styled-components';
import { Grid } from 'gymnast'
import CardCategory from './CardCategory';
import photo1 from './lan-deng-quddu_dZKkQ-unsplash.jpg';
import photo2 from './artem-beliaikin-NnD1jMzybbE-unsplash.jpg';
import photo3 from './austin-park-b5R5COcD9lk-unsplash.jpg';
import photo4 from './frank-wang-ogxlyCA1BQc-unsplash.jpg';
import photo5 from './kelli-tungay-2LJ4rqK2qfU-unsplash.jpg';
import photo6 from './bruce-mars-gJtDg6WfMlQ-unsplash.jpg';
import photo7 from './jade-seok-UGMGdEeifvA-unsplash.jpg';
import photo8 from './krista-mangulsone-9gz3wfHr65U-unsplash.jpg';
import photo9 from './rhema-kallianpur-jbJ-_hw2yag-unsplash.jpg';
import photo10 from './artem-beliaikin-kTd2PvtqE_o-unsplash.jpg'


const Section1 = (props) => {
  return(
    <div className="section1">

  <Grid className="grid_section1">
    <Grid className="grid_section1_1"  margin={2} className="grid">

    <CardCategory
      text='Clothing'
      category='clothing'
      src={photo1}/>
      <CardCategory
      text='Furniture'
      src={photo2}
      category='furniture'/>
      <CardCategory
      text='Electronics'
      src={photo4}
      category='electronics'/>
      <CardCategory
      text='Vehicles'
      src={photo3}
      category='vehicles' />
      <CardCategory
      text='School'
      src={photo5}
      category='school'/>
        </Grid>
        <Grid margin={2} className="grid">

        <CardCategory
        text='Entertainment'
        src={photo5}
        category='entertainment'/>
        <CardCategory
        text='Garden'
        src={photo7}
        category='garden'/>
        <CardCategory
        text='Pet'
        src={photo8}
        category='pet'/>
        <CardCategory
        text='Sport'
        src={photo6}
        category='sport'/>
        <CardCategory
        text='Homes'
        src={photo9}
        category='homes'/>
        </Grid>
      </Grid>

<Grid className="grid_section1" >
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


export default Section1
