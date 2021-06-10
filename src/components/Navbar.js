import React, { Component } from 'react';
import MenuItems from './MenuItems';
import './Navbar.css';

class Navbar extends Component{
    state = {
      clicked: false,
    }

    handleClick = () => {this.setState({clicked: !this.state.clicked})}
  
    render(){
    return (
      <nav className="NavbarItems">
        <h1 className="Navbar-Logo">React<i className="fab fa-react"></i></h1>
        <div className="menu-icon">
        
        </div>
        {this.state.clicked ? (

          <>
          <i className="fas fa-times"></i>
            <ul>
            {MenuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <a className={item.cName} href={item.url}>{item.title}</a>
                   </li>
                )
              })}
            </ul>
        </>
        ):( 
          <i className="fas fa-bars"></i>
        )} 
      </nav>
    )
  }
  }




export default Navbar;