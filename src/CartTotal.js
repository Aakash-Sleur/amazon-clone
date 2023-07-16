import React from 'react'
import styled from 'styled-components'
import { NumericFormat } from 'react-number-format';


function CartTotal({getCount, getTotalPrice}) {


  return (
    <Container>
      <Subtotal>Subtotal( {getCount()} items): 
      <NumericFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} />;
      </Subtotal>
      <CheckoutButton>Proceed to Checkout</CheckoutButton>
    </Container>
  )
}

export default CartTotal

// Style section

const Container = styled.div`

    flex: 0.3;
    padding: 20px;
    width: 100%;
    background-color: white;
    border-radius: 1rem;
    margin-bottom: 1rem;
`


const Subtotal = styled.h2`
  margin-bottom: 16px;
`


const CheckoutButton = styled.button`
  background-color: #f0c14b;
  width: 100%;
  padding: 4px 8px;
  border: 2px solid #a88734;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 0.8em;

  :hover {
    background: #ddb347;
  }
  
`