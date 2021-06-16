import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { BiSearch, BiCart } from 'react-icons/bi';

const Header = () => {
  return (
    <HeaderWrapper className="header-container">
      <HomeBtn to="/" className="home-btn">Shopping Co</HomeBtn>
      <NavWrapper className='nav-container'>
        <ShopBtn className='shop-btn' to='shop'>Shop</ShopBtn>
        <ButtonWrapper>
        <Button /*onClick={openSearch} */ className='search-btn'>
          <BiSearch />
        </Button>
        <Button /* onClick={openCart} */ className='cart-btn'>
          <BiCart/> 
          {/* {cartLength} */}
          0
        </Button>
        </ButtonWrapper>
      </NavWrapper>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;  
  width: 90%;
  top: 15px;
  left: 10px;
  position: sticky;
`;

const HomeBtn = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
`;

const NavWrapper = styled.nav`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  
`;

const ShopBtn = styled(Link)`
  text-decoration: none;
  font-size: 0.9rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
`;

const Button = styled.button`
  margin: 10px;
  background: none;  
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  
`;

// const SearchBtn = styled.button``;

export default Header; 

