import {login, authFetch, useAuth, logout} from "../auth"
import React, { useEffect, useState } from "react";
import {Form, Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Cards from "./ProductList";

const Section2 = () => {
  const [sort, setSort] = useState('')
  const [logged] = useAuth();
  const [inventory, setInventory] = useState([]);



  const onSubmitClick = (e)=>{
    console.log("submitted")
    let opts = {
      'sort': sort
    }
    console.log(opts)
    fetch('http://localhost:5000/api/sort', {
      method: 'post',
      body: JSON.stringify(opts)
    }).then(r => r.json())
      .then(token => {
        console.log('sort success')
        const inv = token.inventory
        setInventory(inv)
      })
  }

  const handleSortChange = (e) => {
    setSort(e.target.value)
  }

  useEffect(() => {
    setSort("recent")
  },[setSort]);

  useEffect(() => {
    onSubmitClick()
  }, [sort]);



  return(

    <div className="section2">

    <div style={{paddingLeft: "90px", paddingRight: "150px"}}>
    <br/>
    <br/>
      <h4>Featured Products</h4>
      <form className="form" action="/" method="get">
      <div className="dropdown">
      {/*TODO: add for="sort" back? */}
      <label style={{paddingRight: "10px"}}>Sort Products by</label>
        <select style={{border: '1px solid gray', boxShadow: "none"}} name="sort" id="sort" onChange={handleSortChange} value={sort}>
          <option  value="recent">Recently Added</option>
          <option  value="price">Price</option>
        </select>
      </div>
      <br/>
      </form>
      {<Cards prodsrc={inventory}/>}
    </div>

    </div>
  )
}


export default Section2
