import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ShopItems = ({ id, image, name, price}) => {
  return (
    <ItemWrapper>
      <Link to={`/shop/${id}`}>
        
      </Link>
    </ItemWrapper>
  )
}

const ItemWrapper = styled.div``;


export default ShopItems
