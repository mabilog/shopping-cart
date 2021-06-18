import React from 'react'
import styled from 'styled-components'

import ShopItems from '../components/ShopItems'
const Shop = ({foods}) => {
  return (
    <ShopWrapper>
      {foods.map((food) => <ShopItems key={food.id} food={food}/>)}

    </ShopWrapper>
  )
}
const ShopWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: auto;
  justify-items: center;
  align-content: center;
  /* min-height: calc(100vh - 6rem); */
  height: 100%;
  margin-top: 6rem;
  padding: 2rem 0;
`;


export default Shop
