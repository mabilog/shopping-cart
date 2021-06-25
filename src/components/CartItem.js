import React from 'react'
import styled from 'styled-components';

const CartItem = ({item, deleteCartItem, changeQty}) => {

  const handleDelete = () => deleteCartItem(item.id);
  const handleIncrease = () => changeQty(item.id, 1);
  const handleDecrease = () => changeQty(item.id, -1);

  return (
    <CartItemWrapper>
      <Image
        src={`https://source.unsplash.com/${item.img}/300x500`}
        alt={item.id}
      />
      <InfoWrapper >
        <h2>{item.name}</h2>
        <span>{item.price.toFixed(2)}</span>
        <BtnWrapper>
          <button onClick={handleDecrease} disable={item.qty > 2}>-</button>
          <span>{item.qty}</span>
          <button onClick={handleIncrease}>+</button>
        </BtnWrapper>
          <button onClick={handleDelete}>Delete</button>
      </InfoWrapper>
    </CartItemWrapper>
  )
}

const CartItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

const Image = styled.img`
  /* width: 100%; */
  max-width: 400px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;

export default CartItem
