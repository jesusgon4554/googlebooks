import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// components
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/pages/Home"
import Search from "./components/pages/Search"
import Saved from "./components/pages/Saved"

function App() {
  return (
    <div >
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/saved" component={Saved} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
