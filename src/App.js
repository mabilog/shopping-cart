import React from 'react';
import styled from 'styled-components';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Shop from './pages/Shop';
// import Items from './components/Items';
import Food from './components/Food'
import Item from './components/Item.js';

import './App.css';

function App() {
  const findItem = id => {
    Food.find(item => item.id === id)
  console.log('Food.params')}
  // const findItem = id => console.log(id)

  return (
    <AppWrapper> 
        {/* {console.log(Food)} */}
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/shop' exact><Shop foods={Food}/> </Route>
          {/* <Route path='shop/:id' render={routeProps => {
            <Item
              // item={findItem(routeProps.match.params.id)} />
              item={findItem(routeProps)} />

              }}>

          </Route> */}
          <Route path="/shop/:id" render={routeProps => {
            <Item item={findItem(routeProps.match.params.id)} />
            console.log('params')
          }}>
          </Route>
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
