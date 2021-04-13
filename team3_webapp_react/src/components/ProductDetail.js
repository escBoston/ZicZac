import React, { useEffect, useState } from 'react'
import Dropzone from "react-dropzone";
import {Container, Form, Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import UserProfile from "./UserProfile";
import CardItem from './Card';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link, useHistory, useLocation } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import { Button, Icon, Label } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function ProductDetails(props) {

    const history = useHistory();
    const location = useLocation();
    const title = props.location.title
    const [item, setItem] = useState();
    var price, description, img, state, seller = ''
    const like = 0;

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

    if (typeof item != 'undefined') {
      price = parseFloat(item.price).toFixed(2)
      description = item.description
      seller = item.seller
      img = item.photo
      state = item.state
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
      <h3>State</h3><br/>
      <p>{state}</p>
      <Button as='div' labelPosition='right'>
<Button
color='red'
content='Like'
icon='heart'
label={{ basic: true, color: 'red', pointing: 'left', content: like}}
/>



<Link to={{
  pathname: "./SendMessage",
  seller: seller,
  buyer: localStorage.getItem('user'),
  title: title
}}>
<Button style={{marginLeft: "10px"}} basic color='red'
content="Chat with"
label={{ basic: true, color: 'red', pointing: 'left', content: seller}}
icon='wechat'
/>  </Link>
  </Button>

      <Row>
<Col xs={3}>
</Col>
<Col xs={3} className="product_details_sold">
<h5>SOLD BY</h5>
</Col>

  <Col xs={2}>
  <UserProfile width={80} height={80} size={12} username={seller}/>

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
