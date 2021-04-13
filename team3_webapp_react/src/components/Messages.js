import React, { useEffect, useState } from 'react'
import { AppRegistry, Text, View } from 'react-native';
import Header from './Header'
import Footer from './Footer'
import { Link, useHistory, useLocation, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Container, Form, Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';

function format_messages(convoIn, convoOut) {
  var convo = convoIn.concat(convoOut)
  convo.sort(function(a,b){
    return new Date(a[3]) - new Date(b[3]); // sort by date
  });
  var messages = []
  for (var k = 0; k < convo.length; k++) {
    if (convo[k].length == 4) {
      messages.push(
        <div>
        <p>({convo[k][3]}) {convo[k][1]}:</p>
        <p>{convo[k][2]}</p>
        <br />
        </div>
      )
    }
    else {
      messages.push(
        <div>
        <p>({convo[k][3]}) Me:</p>
        <p>{convo[k][2]}</p>
        <br />
        </div>
      )
    }
  }
  return(messages)
}

function Messages (props) {
  const user = localStorage.getItem('user')
  const [inbox, setInbox] = useState([])
  const [outbox, setOutbox] = useState([])
  const [contact, setContact] = useState('')//
  const [convoIn, setConvoIn] = useState([])
  const [convoOut, setConvoOut] = useState([])
  const [msg, setMsg] = useState('')
  const [showmsg, setShowMsg] = useState(false)

  let opts = {
    'user' : user
  }

  useEffect(() => {
  fetch('http://localhost:5000/api/get_inbox', {
    method: 'post',
    body: JSON.stringify(opts)
  }).then(r => r.json())
  .then(token => {
    setInbox(token.inbox)
    setOutbox(token.outbox)
  })
  }, []);

  const handleClick = (e) => {
    setContact(e.target.getAttribute("id"));
    setShowMsg(true);
    let opts = {
      'user' : user,
      'contact' : contact,
    }
    fetch('http://localhost:5000/api/get_messages', {
      method: 'post',
      body: JSON.stringify(opts)
    }).then(r => r.json())
    .then(token => {
      setConvoIn(token.convoIn)
      setConvoOut(token.convoOut)
    })
  }

  const onMsgChange = (event) => {
      setMsg(event.currentTarget.value)
  }

  const onSend = (e) => {
    let opts = {
      'buyer' : user,
      'seller' :  contact,
      'message' :  msg
    }
    fetch('http://localhost:5000/api/send_message', {
      method: 'post',
      body: JSON.stringify(opts)
    }).then(r => r.json())
    .then(token => {
      //console.log('sup')
    })
  }

  var senders = []
  for (var i = 0; i < inbox.length; i++) {
    senders.push(inbox[i][1])
  }
  senders = [...new Set(senders)];
  var convos = []
  for (var j = 0; j < senders.length; j++) {
    convos.push(<div><li>
                <Button id={senders[j]} onClick={handleClick}>{senders[j]}</Button>
                </li><br /></div>
              )
  }

  var messages = format_messages(convoIn, convoOut)

  return (
    <div>
    <Header />
    <div style={{paddingLeft:"100px"}}>
    <Row>
    <Col>
    <div>
    <h4>View your conversations</h4>
    <ul>
    {convos}
    </ul>
    </div>
    </Col>
    <Col>
    <div>
    {messages}
    </div>
    <div>
    {(showmsg) ?
        <div>
        <Form.Control as="textarea" rows={3}
            onChange={onMsgChange}
            value={msg}
        />
        <Button onClick={onSend}>SEND</Button>
        </div>
        : <p>Select a name to see your message history!</p>
    }

    </div>
    </Col>
    </Row>
    </div>
    <Footer />
    </div>
  );
}

export default Messages;
