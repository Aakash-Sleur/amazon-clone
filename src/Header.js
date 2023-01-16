import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';


function Header({ cartItems, user, signout, getCount }) {
  // console.log(cartItems)

  return (
    <Container>
      <HeaderLogo>
        <Link to="/">
          <img src={"https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White2.png"} alt="amazon-logo"/>
        </Link>
      </HeaderLogo>

      <HeaderOptionAddress className='target'>
        <LocationOnOutlinedIcon/>
        <HeaderOption>
          <OptionLineOne>Hello,</OptionLineOne>
          <OptionLineTwo>Select your address</OptionLineTwo>
        </HeaderOption>
      </HeaderOptionAddress>

      <HeaderSearch>
        <HeaderSearchInput type='text'/>
        <HeaderSearchIconContainer>
          <SearchIcon/>
        </HeaderSearchIconContainer>
      </HeaderSearch>

      <HeaderNavItems>

      <HeaderOption onClick={signout}>
        <OptionLineOne>Hello, { user.name } </OptionLineOne>
        <OptionLineTwo>Account & Lists</OptionLineTwo>
      </HeaderOption>

      <HeaderOption className='target'>
        <OptionLineOne>Returns </OptionLineOne>
        <OptionLineTwo>& orders</OptionLineTwo>
      </HeaderOption>

      <HeaderOptionCart>
        <Link to="/cart">
            <ShoppingCartOutlinedIcon/>
            <CartCount>{getCount()}</CartCount>
        </Link>
      </HeaderOptionCart>

      </HeaderNavItems>
      

    </Container>
  )
}

export default Header

// Style Section

const Container = styled.div`
    height: 60px;
    background-color: #0f1111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white; 

    .target{
      @media (max-width: 650px) {
        display: none;
      }
    }

`

const HeaderLogo = styled.div`
  img {
    width: 100px;
    margin: 11px 15px 4px 10px;
  }
    
`

const HeaderOptionAddress = styled.div`
  padding-left: 9px;
  display: flex;
  align-items: center;
`

const OptionLineOne = styled.div`
    font-size: 10px;
    font-weight: 400;
`

const OptionLineTwo = styled.div`
  font-size: 12px;
  font-weight: 700;
`

const HeaderOption = styled.div`
  padding: 0 9px 0 9px;
  cursor: pointer;
`


const HeaderSearch = styled.div`
  display:flex;
  height: 40px;
  flex-grow: 1;
  margin-left: 4px;
  border-radius: 4px;
  overflow: hidden;
  background-color: white;
  :focus-within {
    box-shadow: 0 0 0 3px #F90;
  }
`

const HeaderSearchInput = styled.input`
  flex-grow: 1;
  border: 0;
  :focus {
    border: none;
  }
`
const HeaderSearchIconContainer = styled.div`
  background-color: #febd69;
  width: 3rem;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderNavItems = styled.div`
  display: flex;

  

`

const HeaderOptionCart = styled.div`
  display: flex;
  align-items: center;
  padding-right: 9px;
  width: 3rem;

  a {
    display: flex;
    align-items: center;
    padding-right: 9px;
    color: white;
    text-decoration: none;
  }
`

const CartCount = styled.div`
  padding-left: 4px;
  font-size: 0.7em;
  font-weight: 700;
  color: #f08804;
`