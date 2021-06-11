import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Submenu = ({item, index}) => {
  const [subnav, setSubNav] = useState(false)

  const showSubNav = () => setSubNav(!subnav);
  
  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubNav}>
        <div key={index}>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav 
          ? item.iconOpened 
          : item.subNav 
          ? item.iconClosed 
          : null}
        </div>
      </SidebarLink>
      {subnav && item.subNav.map((item, index) => {
        return(
          <DropdownLink to={item.path} key={index}>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </DropdownLink>
        )
      })}
    </>
  )
}

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover{
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items:center;
  color: white;
  height: 50px;
  padding-left: 3rem;
  text-decoration: none;
  list-style: none;

  &:hover {
    background: #632ce4;
  }

`;

export default Submenu;