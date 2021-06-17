import React from 'react';
import styled from 'styled-components';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import ShopItems from './components/ShopItems'
import Items from './components/Items';


import './App.css';

function App() {
  return (
      <AppWrapper> 
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/shop' exact><Shop items={Items}/> </Route>
        </Switch>
      </AppWrapper>
  );
}

const AppWrapper = styled(Router)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
