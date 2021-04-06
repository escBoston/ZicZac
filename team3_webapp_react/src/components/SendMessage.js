import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link, useHistory, useLocation } from 'react-router-dom';
import {Container, Form, Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';


function SendMessage (props) {
  const history = useHistory();
  const seller = props.location.seller
  const title = props.location.title
  const buyer = props.location.buyer
  const [message, setMessage] = useState('')

  const onSend = (event) => {
    event.preventDefault();

    let opts  = {
      'seller' : seller,
      'buyer' : buyer,
      'message' : message
    }
    fetch('http://localhost:5000/api/send_message', {
      method: 'post',
      body: JSON.stringify(opts)
    }).then(r => r.json())
    .then(token => {
      alert('success!')
      history.push('/')
    })
    }

  const onMessageChange = (event) => {
      setMessage(event.currentTarget.value)
  }

  return (
    <div>
    <Header />
    <p>Ask {seller} about the {title}!</p>
    <Form.Control as="textarea" rows={5}
        onChange={onMessageChange}
        value={message}
    />
    <Button onClick={onSend}>SEND</Button>
    <Footer />
    </div>


  );
}

export default SendMessage;
