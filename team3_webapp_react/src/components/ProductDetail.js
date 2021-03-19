import React, { useEffect, useState } from 'react'
import Dropzone from "react-dropzone";
import {Container, Form, Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import UserProfile from "./UserProfile";
import CardItem from './Card';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link, useHistory, useLocation } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import UserProfile_small from "./UserProfile_small";
import { Button, Icon, Label } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


function ProductDetails(props) {
    const history = useHistory();
    const location = useLocation();
    const title = props.location.title
    const [item, setItem] = useState();
    var price, description, seller, img = ''

    let opts = {
      'title': title
    }

    useEffect(() => {
    fetch('http://localhost:5000/api/get_item', {
      method: 'post',
      body: JSON.stringify(opts)
    }).then(r => r.json())
    .then(token => {
      setItem(token.item[0])
    })
    }, []);

    console.log(item)
    if (typeof item != 'undefined') {
      price = parseFloat(item.price).toFixed(2)
      description = item.description
      seller = item.seller
      img = item.photo_filepath
    }

    return (
      <div>
      <Header />
      <Container>
      <h2 style={{marginLeft: 20, position:"relative"}}>{title}</h2>
      <Row>
      <Col xs={6}>
      <CardItem
        src={img}
        text=''
        label={price}
        path='/services'
      />
      </Col>
      <Col xs={6}>
      <h3>Description</h3><br/>
      <p>{description}</p>
      <Button as='div' labelPosition='right'>
<Button
  color='red'
  content='Like'
  icon='heart'
  label={{ basic: true, color: 'red', pointing: 'left', content: '2,048' }}
/>

<Button basic color='red'
  content='Chat'
  icon='wechat'
/>

<Button
  color='red'
  content='Add to Cart'
  icon='cart plus'
/>


      </Button>
      <Row>
<Col xs={3}>
</Col>
<Col xs={3} className="product_details_sold">
<h5>SOLD BY</h5>
</Col>

  <Col xs={2}>
{seller} <UserProfile_small />
</Col>
</Row>
      </Col>
      </Row>
      <br/>
      <br/>
      <br/>
      </Container>
      <Footer />
      </div>

    )
}

export default ProductDetails
