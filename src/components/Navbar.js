import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import NavbarData from './NavbarData';
const Navbar = () => {

  const [clicked, setClicked] = useState(false);

  return (
    // <Nav>
    //   {NavbarData.map((item, index) => {
    //     return(
    //       <NavLink>
    //         <div  to={item.path} onClick={setClicked(!clicked)} key={index}>
    //           {item.title} {item.icon}
    //         </div>
    //       </NavLink>
    //     )
    //   })}
    // </Nav>
    <>
    {NavbarData.map((item, index) => {
      <NavLink key={index} style={{color:'white'}}> 
        {item.title}
      </NavLink>
    })}
    </>
  )
}

const Nav = styled.ul``;

const NavLink = styled(Link)`
 display: flex;
 flex-direction: flex-end;
 color: white; 
`;


export default Navbar;
