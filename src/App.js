import React, { useState }from 'react';
import styled from 'styled-components';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Shop from './pages/Shop';
// import Items from './components/Items';
import Food from './components/Food'
import Item from './components/Item'
import Cart from './pages/Cart';

import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addCartItem = (newItem) => {
    const alreadyInCart = cartItems
      .map(item => item.id)
      .includes(newItem.id)
    if(alreadyInCart){
      changeQty(newItem.id, 1);
    }else {
      setCartItems([...cartItems, newItem])
    }
  };

  const findItem = (id) => Food.find(item => item.id === id)

  const changeQty = (id, delta) => {
    setCartItems(
      cartItems.map(
        item => item.id === id ? { ...item, qty: item.qyt + delta} : item
      ))
  }

  const deleteCartItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id === id)
    );
  }

  const cartItemsQty = cartItems.reduce((acc, cur) => acc + cur.qty, 0);

  return (
    <AppWrapper basename="/"> 
          <Navbar  cartItemsQty={cartItemsQty}/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/shop' exact><Shop foods={Food}/> </Route>
            <Route 
              exact
              path="/shop/:id"
              render={(routeProps) => (
                <Item 
                  item={findItem(routeProps.match.params.id)} 
                  addCartItem={addCartItem}/>
                )}
            />
            <Route 
              path='/cart'>
              
              <Cart 
                items={cartItems}
                changeQty={changeQty}
                deleteCartItem={deleteCartItem} 
              />
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
