import React, {Component} from 'react';
import './components/CSS/App.css';
import './components/CSS/MediaQueries.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from './components/Landing';
import Error from './components/Error';


class App extends Component{
  render(){
    return (
      <Router> 
              <div className="App">
       <Switch>
      <Route path="/" exact component={Landing}></Route>
       <Route path="*" exact component={Error}/>
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
