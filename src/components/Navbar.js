import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {  BiCart } from 'react-icons/bi';

const Navbar = ({cartItemsQty}) => {
  return (
    <NavWrapper>
      <Home to='/shopping-cart/'>Shopping Co</Home>
      <Shop to='/shopping-cart/shop'>Shop</Shop>
      <Cart to='/shopping-cart/cart'>
        <BiCart/> 
        <span>{cartItemsQty}</span> 
      </Cart>

    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-transform: uppercase;
  height: 6rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-size: 1.3rem;
  background-color: #eee;
  transition: background-color 0.5s ease-in;
  color: black;
`;


const Home = styled(Link)`
  text-decoration: none;
  color: inherit;

`;

const Shop = styled(Link)`
  text-decoration: none;
  color: inherit;


`;

const Cart = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
  text-decoration: none;
  color: inherit;
  position: relative;
  font-size: 2rem;
`;


export default Navbar; 

