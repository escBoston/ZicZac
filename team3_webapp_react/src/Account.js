import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'

function Account(props) {
  console.log(props.user)
  return (
    <div>
    <Header />
                <div><ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/Signin"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/Signup"}>Sign up</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/Sell"}>Sell my product</Link>
                  </li>
                </ul></div>
    <Footer />
    </div>


  );
}

export default Account;
