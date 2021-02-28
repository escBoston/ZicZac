import {login, authFetch, useAuth, logout} from "../auth"
import {Form, Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'

const Section2 = () => {

  const [logged] = useAuth();

  const onSubmitClick = (e)=>{
    e.preventDefault()
    console.log("submitted")
  }

  return(

    <div className="section2">
    {!logged ? <h2>Secret: log in to see </h2> :
    <div>
      <h4>Products</h4>
      <form className="form" action="/" method="get">
      <div className="dropdown">
      {/*TODO: add for="sort" back? */}
      <label>Sort Products:</label>
        <select name="sort" id="sort">
          <option value="recent">Recently Added</option>
          <option value="top">Top Rated</option>
        </select>
      <button className="button" onClick={onSubmitClick} type="submit">Submit</button>
      </div>
      </form>
    {/*TODO: add inventoryes */}
    </div>
    }
    </div>
  )
}


export default Section2
