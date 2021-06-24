import React from 'react'

const CartItem = ({item, deleteCartItem, changeQty}) => {

  const handleDelete = () => deleteCartItem(item.id);
  const handleIncrease = () => changeQty(item.id, 1);
  const handleDecrease = () => changeQty(item.id, -1);

  return (
    <div>
      <img
        src={`https://source.unsplash.com/${item.img}/300x500`}
        alt={item.id}
      />
      <div>
        <h2>{item.name}</h2>
        <span>{item.price.toFixed(2)}</span>
      </div>
      <div>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease} disable={item.quantity > 2}>-</button>
      </div>
    </div>
  )
}

export default CartItem
