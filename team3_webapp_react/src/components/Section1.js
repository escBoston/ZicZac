import React, { useEffect, useState } from "react";
import {Form, Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import {
  Link,
  useHistory
} from "react-router-dom";


const Section1 = (props) => {
  const history = useHistory();
  const [category, setCategory] = useState('')

  function categorySelect(category) {
    history.push({
      pathname: "../Products",
      category: category
    });
  };
  return(
    <div className="section1">
      <button className = "button1" onClick={() => categorySelect("clothing")}>Clothing & shoes</button><br />
      <button className = "button1" onClick={() => categorySelect("furniture")}>Furniture</button><br />
      <button className = "button1" onClick={() => categorySelect("electronics")}>Electronics</button><br />
      <button className = "button1" onClick={() => categorySelect("vehicles")}>Vehicles</button><br />
      <button className = "button1" onClick={() => categorySelect("school")}>School supplies</button><br />
      <button className = "button1" onClick={() => categorySelect("toys")}>Toys & Entertainment</button><br />
      <button className = "button1" onClick={() => categorySelect("garden")}>Garden & Outdoors</button><br />
      <button className = "button1" onClick={() => categorySelect("pets")}>Pet supplies</button><br />
      <button className = "button1" onClick={() => categorySelect("sports")}>Sporting goods</button><br />
      <button className = "button1" onClick={() => categorySelect("home")}>Home sales</button><br />
      <button className = "button1" onClick={() => categorySelect("arts")}>Arts & Crafts</button><br />
      <button className = "button1" onClick={() => categorySelect("jewelry")}>Jewelry & accessories</button><br />
      <button className = "button1" onClick={() => categorySelect("free")}>Free stuff</button><br />
    </div>
  );
}


export default Section1
