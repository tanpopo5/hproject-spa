import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./component/Home";
import Stuff from "./component/Stuff";
import Contact from "./component/Contact";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/stuff">Stuff</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <Switch>
            <div className="content">
              <Route path="/" exact component={Home} />
              <Route path="/stuff" exact component={Stuff} />
              <Route path="/contact" exact component={Contact} />
            </div>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
