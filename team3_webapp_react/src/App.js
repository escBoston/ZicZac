import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'


function App() {
  return (
    <div className="App">
    <Header />

    <Section1 />
    <Section2 />
    <Section3 />

    <Footer />
    </div>


  );
}

export default App;
