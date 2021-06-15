import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { BiSearch, BiCart } from 'react-icons/bi';

const Header = () => {
  return (
    <HeaderWrapper className="header-container">
      <Link to="/" className="home-btn">Shopping Co</Link>
      <NavWrapper className='nav-container'>
        <Link className='shop-btn' to='shop'>Shop</Link>
        <ButtonWrapper>
        <SearchBtn /*onClick={openSearch} */ className='search-btn'>
          <BiSearch />
        </SearchBtn>
        <CartBtn /* onClick={openCart} */ className='cart-btn'>
        <BiCart/>
        </CartBtn>
        </ButtonWrapper>
      </NavWrapper>
    </HeaderWrapper>
  )
}

const ButtonWrapper = styled.div``;

const CartBtn = styled.button``;

const HeaderWrapper = styled.header``;

const NavWrapper = styled.nav``;

const SearchBtn = styled.button``;

export default Header; 

