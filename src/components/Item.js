import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import styled from 'styled-components';


const Item = ({item, addCartItem}) => {
  const [showCompleteOrder, setShowCompleteOrder] = useState(false);
  const { goBack } = useHistory();

  const handleAdd = () => {
    setShowCompleteOrder(true);
    addCartItem(item);
  }
  return (
    <ItemWrapper>
      <img
      src={`https://source.unsplash.com/${item.img}/640x640`}
      alt={item.id}
      />
      <InfoWrapper>
        <h1>{item.name}</h1>
        <p>{item.price.toFixed(2)} USD</p>
        <button onClick={handleAdd}>Add to cart</button>
        {showCompleteOrder && (
          <Link to='/cart'>
            <button>Complete Order</button>
          </Link>
        )}
        <button onClick={goBack}>
          <BsChevronLeft/> Go Back
        </button>
      </InfoWrapper>
    </ItemWrapper>
  )
}

const ItemWrapper = styled.div``;

const InfoWrapper = styled.div``;
export default Item
