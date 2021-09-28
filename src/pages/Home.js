import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
// import homeImage from '../images/products/homepage.jpg';
const Home = () => {
  return (
    <HomeWrapper>
      <Catalogue to="/shopping-cart/shop">Catalogue</Catalogue>
    </HomeWrapper>
  )
}

const HomeWrapper =styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-image: url('https://images.unsplash.com/photo-1564403333028-d2898fae2b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Catalogue = styled(Link)`
  position: absolute;
  top: 60%;
  left: 55%;
  padding: 0.3em 2em;
  font-size: 1.1rem;
  font-weight: bold;
  font-family: inherit;
  cursor: pointer;
  color: black;
  background-color: white;
  text-transform: uppercase;
  border: 1px solid black;
  &:hover{
    background-color: #eee;
  }
`;

export default Home;
