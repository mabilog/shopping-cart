import React from 'react'
import styled from 'styled-components'

import ShopItems from '../components/ShopItems'
const Shop = ({items}) => {
  return (
    <ShopWrapper>
      {items.map((item) => <ShopItems key={item.id} item={item}/>)}
    </ShopWrapper>
  )
}
const ShopWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-content: center;
  min-height: calc(100vh - 6rem);
  height: 100%;
  margin-top: 6rem;
  padding: 2rem 0;
`;


export default Shop
