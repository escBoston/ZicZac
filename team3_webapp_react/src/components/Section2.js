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
    e.preventDefault()
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

  return(

    <div className="section2">
    {!logged ? <h2>Log in to view inventory </h2> :
    <div>
      <h4>Products</h4>
      <form className="form" action="/" method="get">
      <div className="dropdown">
      {/*TODO: add for="sort" back? */}
      <label>Sort Products:</label>
        <select name="sort" id="sort" onChange={handleSortChange} value={sort}>
          <option value="recent">Recently Added</option>
          <option value="price">Price</option>
        </select>
      <button className="button" onClick={onSubmitClick} type="submit">Submit</button>
      </div>
      </form>
      {<Cards prodsrc={inventory}/>}
    </div>
    }
    </div>
  )
}


export default Section2
