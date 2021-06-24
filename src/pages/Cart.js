import React from 'react'

import CartItem from '../components/CartItem'
const Cart = ({items, changeQty, deleteCartItem}) => {

  // const cartItems = items.map(item => (
  //   <CartItem
  //     key={item.id}
  //     item={item}
  //     deleteCartItem={deleteCartItem}
  //     changeQty={changeQty}
  //     />
  // ))
  
  const cartTotal = items
    .map(item => item.price * item.qty)
    .reduce((acc, cur) => acc + cur, 0)
    .toFixed(2);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {items.length > 0 ? (
        <div>
          <div>{items.map(item => (
            <CartItem key={item.id}
              item={item}
              deleteCartItem={deleteCartItem}
              changeQty={changeQty}
              />
          ))}</div>
        </div>
      ) : (
        <div>Empty</div>
      )}
    </div>
  )
}

export default Cart 
