import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from './component/Home';
import Favorites from './component/Favorites';
import Popular from './component/Popular';
import PopularBattle from './component/PopularBattle';
import Weekly from './component/Weekly';
import WeeklyBattle from './component/WeeklyBattle';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

  render() {

    return (
      <BrowserRouter>
        <div>
          
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/weekly">Weekly</Link></li>
              <li><Link to="/weekly-battle">Weekly Battle</Link></li>
              <li><Link to="/popular">Popular</Link></li>
              <li><Link to="/popular-battle">Popular Battle</Link></li>
              <li><Link to="/favorites">Favorites</Link></li>
            </ul>
          

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/weekly" component={Weekly} />
            <Route exact path="/weekly-battle" component={WeeklyBattle} />
            <Route exact path="/popular" component={Popular} />
            <Route exact path="/popular-battle" component={PopularBattle} />
            <Route exact path="/favorites" component={Favorites} />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}
export default App;