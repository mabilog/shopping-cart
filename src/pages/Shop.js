import React from 'react'
import styled from 'styled-components'

import ShopItems from '../components/ShopItems'
const Shop = ({foods}) => {
  return (
    <ShopWrapper>
      {foods.map((food) => <ShopItems key={food.id} {...food}/>)}
      {console.log("Shop component")}
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
  height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.25), rgba(0, 0, 0, 0.25)), url('https://images.unsplash.com/photo-1564403333028-d2898fae2b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;


export default Shop
