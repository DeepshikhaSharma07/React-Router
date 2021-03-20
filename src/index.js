import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, // we are aliasing this module for a cleaner call
  Route,
  Link
  // etc.
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './Style.css';


// Home component
class Home extends Component {
  render(){
    return(
      <div>
        <h1>My Fisrt React Router App</h1>
        <h5>React Router takes care of rendering components for us. It does so by matching URLs with components.</h5>
        <img src="https://media.giphy.com/media/3oz8xHEisOJuebgmhq/giphy.gif" />
      </div>
    );
  }
}
// About component
class About extends Component {
  render(){
    return(
      <div>
        <h1>About Us</h1>
        <p>React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.</p>
       
      </div>
    );
  }
}
// Menu component
class Benefits extends Component {
  render(){
    return(
      <div>
        <h1>Benefits</h1>
        <p>Advantages of React router:
          <ul className="header">
            <li>Viewing declarations in a standardized structure helps us to instantly understand what are our app views.</li>
            <li>Lazy code loading.</li>
            <li>Using the React router, we can easily handle the nested views and the progressive resolution of views.</li>
          </ul>
        </p>
      </div>
    );
  }
}
class Navbar extends Component {
  render(){
    return(
      <div className="nav">
        <Link to="/">Home</Link> | 
        <Link to="benefits">Benefits</Link> | 
        <Link to="about">About</Link>
      </div>
    );
  }
}
class Routes extends Component {
  render(){
    return(
      <Router>
        <div>
          <Navbar />
          <Route name="Home" exact path="/" component={Home}/>
          <Route name="benefits" path="/benefits" component={Benefits}/>
          <Route name="About" path="/about" component={About} />
        </div>
      </Router>
    );
  }
}
ReactDOM.render(<Routes />,document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();