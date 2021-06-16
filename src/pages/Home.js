import React from 'react'
import styled from 'styled-components'
const Home = () => {
  return (
    <div>
      <HomeWrapper>Home</HomeWrapper>
    </div>
  )
}

const HomeWrapper =styled.h1`
  display:flex;
  /* position: absolute; */
  justify-content: center;
  align-items: center;
`;
export default Home;
