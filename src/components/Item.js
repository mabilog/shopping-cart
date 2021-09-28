import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import styled from 'styled-components';


const Item = ({item, addCartItem}) => {

  const [showCompleteOrder, setShowCompleteOrder] = useState(false);
  const [clicked, setClick] = useState(false);

  const { goBack } = useHistory();

  const handleAdd = () => {
    setShowCompleteOrder(true);
    addCartItem(item);
    setClick(true);
  }
  return (
    <ItemWrapper>
      <ImgWrapper
      src={`https://source.unsplash.com/${item.img}/500x650`}
      alt={item.id}
      />
      <InfoWrapper>
        <h1>{item.name}</h1>
        <p>{item.price.toFixed(2)} USD</p>
        {/* <AddBtn onClick={handleAdd}>Add to cart</AddBtn> */}
        {clicked ? (
          <ItemAdded>Added to Cart</ItemAdded>
          ) : (
            <AddBtn onClick={handleAdd}>Add to cart</AddBtn>
          ) }
        
        {showCompleteOrder && (
          <CartWrapper to='/shopping-cart/cart'>
            <OrderBtn>Complete Order</OrderBtn>
          </CartWrapper>
        )}
        <BackBtn onClick={goBack}>
          <BsChevronLeft/> Go Back
        </BackBtn>
      </InfoWrapper>
    </ItemWrapper>
  )
}

const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: calc(100vh - 6rem);
  height: 100%;
  margin-top: 6rem;
  /* max-width: 600px; */
  width: 100%;
  margin: auto;
  margin-top: 100px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100%; */
  /* min-height: calc(100vh - 6rem); */
  width: 100%;
  a {
    width: 100%;
  }
`;

const ImgWrapper = styled.img`
  /* min-height: calc(100vh - 6rem);
  height: 100%; */
  /* max-width: 600px; */
`

const CartWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const BackBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4em 2em;
  font-size: 1.1rem;
  font-weight: bold;
  font-family: inherit;
  cursor: pointer;
  border: none;
  background-color: white;
  `;

const OrderBtn = styled.button`
  padding: 0.4em 2em;
  width: 100%;
  max-width: 400px;
  font-size: 26px;
  background-color: black;
  color: white;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    background-color: #333 ;
  }
`;

const AddBtn = styled.button`
  padding: 0.4em 2em;
  width: 100%;
  max-width: 400px;
  font-size: 26px;
  background-color: black;
  color: white;
  font-weight: bold;
  &:hover {
    background-color: #333 ;
  }
`;

const ItemAdded = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.4em 2em;
  width: 100%;
  max-width: 400px;
  font-size: 26px;
  background-color: #333;
  color: white;
  font-weight: bold;
`;


export default Item
