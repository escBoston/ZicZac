import React, { useState } from 'react'
import Dropzone from "react-dropzone";
import {Container, Form, Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import UserProfile from "./UserProfile";
import ProductDetails from "./ProductDetail";

const Continents = [
    { key: 1, value: "MA" },
    { key: 2, value: "AZ" },
    { key: 3, value: "TX" },
    { key: 4, value: "VT" },
    { key: 5, value: "NY" },
    { key: 6, value: "CA" },
    { key: 7, value: "WA" }
]

function UploadProductPage(props) {

    const [TitleValue, setTitleValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [ContinentValue, setContinentValue] = useState(1)
    const [Images, setImages] = useState([])
    const [fileNames, setFileNames] = useState([]);
    const handleDrop = acceptedFiles =>
      setFileNames(acceptedFiles.map(file => file.name));

    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }

    const onContinentsSelectChange = (event) => {
        setContinentValue(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }
    const onSubmit = (event) => {
        event.preventDefault();


        if (!TitleValue || !DescriptionValue || !PriceValue ||
            !ContinentValue || !Images) {
            return alert('fill all the fields first!')
        }

        const variables = {
            writer: props.user.userData._id,
            title: TitleValue,
            description: DescriptionValue,
            price: PriceValue,
            images: Images,
            continents: ContinentValue,
        }
//NEED TO CONNECT TO BACKEND DATABASE TO POST PRODUCT
        // Axios.post('/api/product/uploadProduct', variables)
        //     .then(response => {
        //         if (response.data.success) {
        //             alert('Product Successfully Uploaded')
        //             props.history.push('/')
        //         } else {
        //             alert('Failed to upload Product')
        //         }
        //     })

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
                    value={TitleValue}
                />
                <br/>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3}
                    onChange={onDescriptionChange}
                    value={DescriptionValue}
                />
                <br/>

                <Form.Row>
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                          <Form.Label>Price($)</Form.Label>
                          <Form.Control
                              onChange={onPriceChange}
                              value={PriceValue}
                              type="number"
                          />
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                          <Form.Label>Item Condition</Form.Label>
                          <Form.Control type="text" placeholder="" required />
</Form.Group>
                </Form.Row>


                <Form.Row>
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                          <Form.Label>City</Form.Label>
                          <Form.Control type="text" placeholder="City" required />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                          <Form.Label>State</Form.Label>
                          <Form.Control as="select" onChange={onContinentsSelectChange} value={ContinentValue}>
                          {Continents.map(item => (
                              <option key={item.key} value={item.key}>{item.value} </option>
                          ))}
                          </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                          <Form.Label>Zip</Form.Label>
                          <Form.Control type="text" placeholder="Zip" required />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                          </Form.Control.Feedback>
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
