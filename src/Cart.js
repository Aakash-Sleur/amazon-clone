import React from 'react'
import styled from 'styled-components'
import CartItems from './CartItems'
import CartTotal from './CartTotal'


function Cart({ cartItems}) {
  const getTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += (item.product.price * item.product.quantity)
    });

    return total;
  }

  const getCount = () => {
    let count = 0;
    // Loop through all the cart items

    cartItems.forEach((item) => {
      count += item.product.quantity
    })

    return count;

  }

  console.log(cartItems.length, "This")


  return (
    <Container>
      <CartItems cartItems = {cartItems}/>
      <CartTotal getCount = {getCount} getTotalPrice = {getTotalPrice}/>
    </Container>
  )
}

export default Cart

// Style Section

const Container = styled.div`
  display: flex;
  padding: 14px 18px 0 18px;
  align-items: flex-start;

  @media (max-width: 650px) {
        display: flex;
        flex-direction: column;
  }
    
`