import React, { useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Dropzone from "react-dropzone";
import {Container, Form, Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import UserProfile from "./UserProfile";
import ProductDetails from "./ProductDetail";
import school from './categoryimg/school.jpg'

const states = [
    { key: 1, value: "AL" },
    { key: 2, value: "AK" },
    { key: 3, value: "AZ" },
    { key: 4, value: "AR" },
    { key: 5, value: "CA" },
    { key: 6, value: "CO" },
    { key: 7, value: "CT" },
    { key: 8, value: "DE" },
    { key: 9, value: "DC" },
    { key: 10, value: "FL" },
    { key: 11, value: "GA" },
    { key: 12, value: "HI" },
    { key: 13, value: "ID" },
    { key: 14, value: "IL" },
    { key: 15, value: "IN" },
    { key: 16, value: "IA" },
    { key: 17, value: "KS" },
    { key: 18, value: "KY" },
    { key: 19, value: "LA" },
    { key: 20, value: "ME" },
    { key: 21, value: "MD" },
    { key: 22, value: "MA" },
    { key: 23, value: "MI" },
    { key: 24, value: "MN" },
    { key: 25, value: "MS" },
    { key: 26, value: "MO" },
    { key: 27, value: "MT" },
    { key: 28, value: "NE" },
    { key: 29, value: "NV" },
    { key: 30, value: "NH" },
    { key: 31, value: "NJ" },
    { key: 32, value: "NM" },
    { key: 33, value: "NY" },
    { key: 34, value: "NC" },
    { key: 35, value: "ND" },
    { key: 36, value: "OH" },
    { key: 37, value: "OK" },
    { key: 38, value: "OR" },
    { key: 39, value: "PA" },
    { key: 40, value: "RI" },
    { key: 41, value: "SC" },
    { key: 42, value: "SD" },
    { key: 43, value: "TN" },
    { key: 44, value: "TX" },
    { key: 45, value: "UT" },
    { key: 46, value: "VT" },
    { key: 47, value: "VA" },
    { key: 48, value: "WA" },
    { key: 49, value: "WV" },
    { key: 50, value: "WI" },
    { key: 51, value: "WY" },
]

const categories = [
  { key: 1, value: "clothing" },
  { key: 2, value: "furniture" },
  { key: 3, value: "electronics" },
  { key: 4, value: "vehicles" },
  { key: 5, value: "school" },
  { key: 6, value: "entertainment" },
  { key: 7, value: "garden" },
  { key: 8, value: "pet" },
  { key: 9, value: "sport" },
  { key: 10, value: "home" },
  { key: 11, value: "toys"}
]

function UploadProductPage(props) {

    const history = useHistory();
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState(0)
    const [state, setState] = useState(1)
    const [image, setImage] = useState()
    const [fileNames, setFileNames] = useState([]);
    const [msg, setMsg] = useState('')

    const handleDrop = acceptedFiles => {
      setFileNames(acceptedFiles.map(file => file.name));
      var reader = new FileReader();
      reader.onload = function(e) {
        setImage(reader.result)
      };
      reader.readAsDataURL(acceptedFiles[0]);
    }

    const onTitleChange = (event) => {
        setTitle(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescription(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPrice(event.currentTarget.value)
    }

    const onCategoryChange = (event) => {
      setCategory(event.currentTarget.value)
    }

    const onStateSelectChange = (event) => {
        setState(event.currentTarget.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (!title || !description || !price || !state ) {
            return alert('fill all the fields first!')
        }

        const opts = {
            title: title,
            price: price,
            description: description,
            category: category,
            image: image,
            seller: localStorage.getItem('user'),
            state: state
        }

        fetch('http://localhost:5000/api/post_product', {
          method: 'post',
          body: JSON.stringify(opts)
        }).then(r => r.json())
        .then(token => {
          //setMsg(token.message)
          history.push('/')
        })
    }

    return (
      <Container>
      <Row>
      <Col style={{width: 300, marginLeft: 60}}>
      <UserProfile/>
      </Col>
       <Col style={{width: 400, marginTop: 30}}>
      <h2> Sell Your Product</h2>
            <Form onSubmit={onSubmit} >
                <Form.Label>Title</Form.Label>
                <Form.Control
                    onChange={onTitleChange}
                    value={title}
                />
                <br/>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3}
                    onChange={onDescriptionChange}
                    value={description}
                />
                <br/>

                <Form.Row>
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                          <Form.Label>Price($)</Form.Label>
                          <Form.Control
                              onChange={onPriceChange}
                              value={price}
                              type="number"
                          />
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom06">
                          <Form.Label>Category</Form.Label>
                          <Form.Control as="select" onChange={onCategoryChange} value={category}>
                            {categories.map(item => (
                              <option key={item.key} value={item.value}>{item.value} </option>
                            ))}
                          </Form.Control>
                        </Form.Group>
                </Form.Row>

                <Form.Row>
                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                          <Form.Label>State</Form.Label>
                          <Form.Control as="select" onChange={onStateSelectChange} value={state}>
                          {states.map(item => (
                              <option key={item.key} value={item.value}>{item.value} </option>
                          ))}
                          </Form.Control>
                        </Form.Group>
                </Form.Row>



        <br/>
                <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "dropzone" })}>
            <Form.Control {...getInputProps()} />
            <p>Drag images of your product here</p>
          </div>
        )}
      </Dropzone>
      <div>Files uploaded:
        <ul>
          {fileNames.map(fileName => (
            <li key={fileName}>{fileName}</li>
          ))}
        </ul>
      </div>

                <Button
                    onClick={onSubmit}
                >
                    SELL
                </Button>

            </Form>
            <br/>
</Col>

</Row>
</Container>
    )
}

export default UploadProductPage
