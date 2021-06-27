import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { BsChevronLeft } from 'react-icons/bs'
import CartItem from '../components/CartItem'
const Cart = ({items, changeQty, deleteCartItem}) => {

  const { goBack } = useHistory();
  const cartItems = items.map(item => (
    <CartItem
      key={item.id}
      item={item}
      deleteCartItem={deleteCartItem}
      changeQty={changeQty}
      />
  ))
  
  const cartTotal = items
    .map(item => item.price * item.qty)
    .reduce((acc, cur) => acc + cur, 0)
    .toFixed(2);

  return (
    <CartWrapper>
      <h1>Shopping Cart</h1>
      {items.length > 0 ? (
        <div>
          <div>{cartItems}</div>
          <button onClick={goBack}><BsChevronLeft />Back</button>
          <h2>Total: {cartTotal} CAD</h2>
        </div>
      ) : (
        <div>
          <h2>Your cart is empty</h2>
        </div>
      )}
    </CartWrapper>
  )
}

const CartWrapper = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-around;
 align-items: center;
 min-height: calc(100vh - 6rem);
 height: 100%;
 margin-top: 6rem;
 padding-top: 2rem;
`;


const EmptyText = styled.h2`
  
`;
export default Cart 
