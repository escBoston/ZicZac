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
import clothing from './categoryimg/clothing.jpg';
import furniture from './categoryimg/furniture.jpg';
import electronics from './categoryimg/electronics.jpg';
import vehicles from './categoryimg/vehicles.jpg';
import school from './categoryimg/school.jpg';
import entertainment from './categoryimg/entertainment.jpg';
import garden from './categoryimg/garden.jpg';
import pet from './categoryimg/pet.jpg';
import sport from './categoryimg/sport.jpg';
import home from './categoryimg/home.jpg';

const Section1 = (props) => {
  return(
    <div className="section1">

  <Grid className="grid_section1">
    <Grid className="grid_section1_1"  margin={2} className="grid">

    <CardCategory
      text='Clothing'
      category='clothing'
      src={clothing}/>
      <CardCategory
      text='Furniture'
      src={furniture}
      category='furniture'/>
      <CardCategory
      text='Electronics'
      src={electronics}
      category='electronics'/>
      <CardCategory
      text='Vehicles'
      src={vehicles}
      category='vehicles' />
      <CardCategory
      text='School'
      src={school}
      category='school'/>
    </Grid>
    <Grid margin={2} className="grid">

        <CardCategory
        text='Entertainment'
        src={entertainment}
        category='entertainment'/>
        <CardCategory
        text='Garden'
        src={garden}
        category='garden'/>
        <CardCategory
        text='Pet'
        src={pet}
        category='pet'/>
        <CardCategory
        text='Sport'
        src={sport}
        category='sport'/>
        <CardCategory
        text='Homes'
        src={home}
        category='homes'/>
    </Grid>
  </Grid>

</div>
  );
}


export default Section1
