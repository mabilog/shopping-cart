import React, {useState} from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FaBars, FaTimes, FaReact } from 'react-icons/fa';

import SidebarData from './SidebarData';
import Submenu from './Submenu';


const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <Nav>
      <NavIcon to="#">
        <FaBars onClick={showSidebar}/> 
      </NavIcon>
        <Title> React <FaReact/></Title>
    </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrapper >
          <NavIcon to='#' onClick={showSidebar}>
            <FaTimes />
          </NavIcon>
          {SidebarData.map((item, index)=> {
            return <Submenu item={item} key={index} />
          })}
        </SidebarWrapper>
      </SidebarNav>
    </>
  )
}

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;  

const NavIcon  = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white; 
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display:flex;
  justify-content: center;
  position:fixed;
  top: 0;
  left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrapper = styled.div`
  width: 100%;

`;

const Title = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  color: white;
  font-size: 2rem;
`;
export default Sidebar
