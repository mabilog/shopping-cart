import React from 'react'
import { FiLogIn, FiPackage, FiShoppingCart } from 'react-icons/fi';

const NavbarData = [
  {
    title: 'Log In',
    path: '/login',
    icon: <FiLogIn />,
  },
  {
    title: 'Orders',
    path: '/orders',
    icon: <FiPackage/>,
  },
  {
    title: 'Cart',
    path: '/cart',
    icon: <FiShoppingCart/>,
  },
]
export default NavbarData
