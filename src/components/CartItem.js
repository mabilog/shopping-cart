import React from 'react'
import { Link }from 'react-router-dom'
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
        <ItemLink to={`/shop/${item.id}`}> {item.name}</ItemLink>
        <p>{item.price.toFixed(2)}</p>
        <BtnWrapper>
          <Btn onClick={handleDecrease} disable={item.qty > 2}>-</Btn>
          <Qty> {item.qty} </Qty>
          <Btn onClick={handleIncrease}>+</Btn>
          <BtnDel onClick={handleDelete}>Dismiss</BtnDel>
        </BtnWrapper>
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

const ItemLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
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
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 16px;
`;

const Btn = styled.button`
  background-color: white;
  border: 2px solid black;
  padding: 0 0.5rem;
  color: black;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
`;

const Qty = styled.span`
  background-color: white;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  width: 2rem;
  text-align: center;
  color: black;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
`;

const BtnDel = styled.button`
  background-color: white;
  color: black;
  font-family: inherit;
  font-size: .8rem;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default CartItem
