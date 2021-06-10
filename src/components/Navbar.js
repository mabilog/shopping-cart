import React, { Component } from 'react';
import styled from 'styled-components';

import MenuItems from './MenuItems';
import { FaReact, FaBars, FaTimes} from 'react-icons/fa';
import { IconContext as IC } from 'react-icons';

class Navbar extends Component{
    state = {
      clicked: false,
    }
  render(){
    return (
      <Nav className="NavbarItems">
        <NavLogo>React 
        <IC.Provider value={{style: {marginLeft: '0.5rem', fontsize:'1.6rem', justifySelf:'center'}}} >
          <FaReact/>
        </IC.Provider>
        </NavLogo>
        {this.state.clicked ? (

          <>
          <IC.Provider value={{style: {color: 'white', cursor:'pointer', display: 'none'}}}>
            <FaTimes onClick={{clicked : !this.state.clicked}}/> 
          </IC.Provider>
            <ActiveList>
            {MenuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <a className={item.cName} href={item.url}>{item.title}</a>
                   </li>
                )
              })}
            </ActiveList>
        </>
        ):( 
          <IC.Provider value={{style: {color: 'white', cursor:'pointer', display:'none'}}}>
            <FaBars onClick={{clicked : !this.state.clicked}}/>

          </IC.Provider>
        )} 
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

const ActiveList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 10px;
  list-style:none;
  text-align:center;
  width: 70vw;
  justify-content: end;

  .nav-links{
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }
  .nav-links:hover {
    background-color:#6d76f7;
      border-radius: 4px;
      transition: all 0.2s ease-out;
  }

  .nav-links-mobile {
    display: none;
  }

  
`;

export default Navbar;