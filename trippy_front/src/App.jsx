import React from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Hotel from './views/Hotel'


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav>
          <ul>
            <li><Link to="/Hotel">Hotel</Link></li>
            <li><Link to="/Restaurant">Restaurant</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Hotel" component={Hotel} />
         
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;