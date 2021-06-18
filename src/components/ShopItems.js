import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ShopItems = ({ food }) => {
  
  return (
    <ItemWrapper>
      <FoodLink to={`/shop/${food.id}`}>
        <Image 
          src={food.img}
          alt={food.id} 
          />
          {console.log(food.img)}
          <Text>
            {food.name}
            <Price>${food.price} CAD</Price>
          </Text>
      </FoodLink>
    </ItemWrapper>
  )
}

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
`;

const FoodLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: underline;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Price = styled.p``;

const Image = styled.img`
  height: 300px;
`;

export default ShopItems
