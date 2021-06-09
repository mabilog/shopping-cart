import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './components/About';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Shop from './components/Shop';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default App;
