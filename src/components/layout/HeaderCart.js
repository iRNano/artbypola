import React from "react";
import cartIcon from '../../assets/images/cart_logo.png'
import styled from 'styled-components'

const StyledCart = styled.div`
  cursor: pointer;
  img{
    max-width: 30px;
  }
`
const StyledCartContainer = styled.div`
display: flex;
`
const HeaderCart = ({onClick}) => {
  return (
    <StyledCartContainer className="header-cart" style={{ padding: "1em", textAlign: "right" }} onClick={onClick}>
      {/* <i className="shopping cart icon"></i> */}
      <span style={{flex:2}} />
      <StyledCart>
        <img className="shopping cart" src={cartIcon} alt="cart icon"></img>
        </StyledCart>
    </StyledCartContainer>
  );
};

export default HeaderCart;
