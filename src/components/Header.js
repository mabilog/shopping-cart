import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { BiSearch } from 'react-icons/bi';

const Header = () => {
  return (
    <HeaderWrapper className="header-container">
      <Link to="/">Shopping Co</Link>
      <NavWrapper className='nav-container'>
        <Link className='shop-btn' to='shop'>Shop</Link>
        <SearchBtn /*onClick={openSearch} */ className='search-btn'>
          <BiSearch />
        </SearchBtn>
        <CartBtn /* onClick={openCart} */ className='cart-btn'></CartBtn>
      </NavWrapper>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header``;

const NavWrapper = styled.nav``;

const SearchBtn = styled.button``;

const CartBtn = styled.button``;

export default Header; 

