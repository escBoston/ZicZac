import {Form, Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'

const Section2 = () => {
  return(
    <div className="section2">
    <h4>Products</h4>
    <form class="form" action="/index" method="get">
    <div class="dropdown">
    <label for="sort">Sort Products:</label>
      <select name="sort" id="sort">
        <option value="recent">Recently Added</option>
        <option value="top">Top Rated</option>
      </select>
    <button class="button" type="submit" onclick="index()">Submit</button>
    </div>
    </form>
<ul>
  {% for item in inventory %}
    <li><a href="product.html?product={{item.title}}" id="a">{{item.title}}</a></li>
    <li>${{item.price}}</li>
  {% endfor %}
</ul>
    </div>
  )
}


export default Section2
