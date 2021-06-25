import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ShopItems = ({ food }) => {
  return (
    <ItemWrapper>
      <FoodLink to={`/shop/${food.id}`}>
        <Image 
          src={`https://source.unsplash.com/${food.img}/640x640`}
          alt={food.id} 
          />
          <Text>
            {food.name}
            <p>${food.price} CAD</p>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  width: auto;
`;

const Image = styled.img`
  height: 300px;
  max-width: 300px;
`;

export default ShopItems
