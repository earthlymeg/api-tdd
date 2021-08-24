
import React from "react";
import './App.css'
import Home from './components/Home'
import SavedRecipes from './components/SavedRecipes'
import { Route, BrowserRouter as Router, Switch } from
  "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/savedRecipes" component={SavedRecipes} />
            <Route path="*" component={Home} />
          </Switch>
        </div>
      </Router>

    )
  }

}



export default App;
