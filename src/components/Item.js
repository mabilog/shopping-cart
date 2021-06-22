// import React, {useState, useEffect} from 'react'
// import { Link, useHistory } from 'react-router-dom';
// import { BsChevronLeft } from 'react-icons/bs';\
import React from 'react';
// import styled from 'styled-components';


// const Item = ({item, addCartItem}) => {
const Item = ({item}) => {

  // const [showCompleteOrder, setShowCompleteOrder] = useState(false);
  // const { goBack } = useHistory();

  // const handleAdd = () => {
  //   setShowCompleteOrder(true);
  //   // addCartItem(item);
  // }
  
  return (<div>Item</div>)
  // return (
  //   <ItemWrapper>
  //     <img
  //     src={`https://source.unsplash.com/${item.img}/640x640`}
  //     alt={item.id}
  //     />
  //     <InfoWrapper>
  //       <h1>{item.name}</h1>
  //       <p>{item.price.toFixed(2)} USD</p>
  //       <AddBtn onClick={handleAdd}>Add to cart</AddBtn>
  //       {showCompleteOrder && (
  //         <Link to='/cart'>
  //           <OrderBtn>Complete Order</OrderBtn>
  //         </Link>
  //       )}
  //       <BackBtn onClick={goBack}>
  //         <BsChevronLeft/> Go Back
  //       </BackBtn>
  //     </InfoWrapper>
  //   </ItemWrapper>
  // )
}

// const ItemWrapper = styled.div`
//   display: flex;
//   min-height: calc(100vh - 6rem);
// `;

// const InfoWrapper = styled.div``;

// const BackBtn = styled.button``;

// const OrderBtn = styled.button``;

// const AddBtn = styled.button``;


export default Item
