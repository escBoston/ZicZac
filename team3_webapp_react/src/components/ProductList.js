import React from 'react';
import CardItem from './Card';
import {Container, Form, Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';


function Cards() {
  return (
    <div className='cards'>
      <h1>PRODUCTS</h1>
      <Row>
            <CardItem
              src=''
              text='Price'
              label='Furniture'
              path='/ProductDetails'
            />
            <CardItem
              src=''
              text='Price'
              label='Clothes'
              path='/ProductDetails'
            />
            <CardItem
              src=''
              text='Price'
              label='Beauty'
              path='/ProductDetails'
            />

            <CardItem
              src=''
              text='Price'
              label='Something'
              path='/ProductDetails'
            />
  </Row>
  <Row style={{marginTop: 20}}>
            <CardItem
              src=''
              text='Price'
              label='Something'
              path='/ProductDetails'
            />
            <CardItem
              src=''
              text='Price'
              label='Someting'
              path='/ProductDetails'
            />
            <CardItem
              src=''
              text='Price'
              label='Something'
              path='/ProductDetails'
            />
            <CardItem
              src=''
              text='Price'
              label='Someting'
              path='/ProductDetails'
            />
</Row>
    </div>
  );
}

export default Cards;
