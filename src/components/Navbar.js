import React, { Component } from 'react';
import styled from 'styled-components';

import MenuItems from './MenuItems';
import { FaReact } from 'react-icons/fa';
import { IconContext as IC } from 'react-icons';

class Navbar extends Component {
  state = {
    clicked: false,
  }

  handleCLick = () => {
    
  }

  render() {
    return (
      <Nav className="NavbarItems">
        <NavLogo>React 
        <IC.Provider value={{style: {marginLeft: '0.5rem', fontsize:'1.6rem', justifySelf:'center', animation: 'spin-animation 0.5s infinite'}}} >
          <FaReact onClick={this.handleCLick}/>
        </IC.Provider></NavLogo>
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </Nav>
    )
  }
}

const Nav = styled.nav`
  background: linear-gradient(90deg, rgb(110, 94, 254) 0%, rgba(72,63,525,1) 100%);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  `;

const NavLogo = styled.h1`
  color: #fff; 
  justify-items: start;
  margin-left: 20px; 
  cursor: pointer;
`;


export default Navbar;