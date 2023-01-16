import React from 'react'
import styled from 'styled-components'
import { db } from './Firebase'

function CartItem({id, item}) {

  let options = []

  for(let i=1; i<Math.max(item.quantity + 1, 20); i++){
    options.push(<option value = {i}> Qty: {i}</option>)
  }

  const changeQuantity = (e) => {
      db.collection('cartitems').doc(id).update({
        quantity: parseInt(e)
      })
  }

  const deleteItem = (e) => {
    e.preventDefault()
    db.collection('cartitems').doc(id).delete();
  }



  return (
    <Container>
      <ImageContainer>
            <img src={item.image}  alt="product-img"
            />
      </ImageContainer>
      <CartItemInfo>
        <CartItemInfoTop>
            <h2>{item.name}</h2>
        </CartItemInfoTop>
        <CartItemInfoBottom>
            <CartItemQuantityContainer>
              <select 
                value = {item.quantity}
                onChange = {(e) => changeQuantity(e.target.value)}
              >
                {options}
              </select>
            </CartItemQuantityContainer>
            <CartItemDeletionContainer
            onClick={deleteItem}
            >
            Delete
            </CartItemDeletionContainer>
        </CartItemInfoBottom>
      </CartItemInfo>
      <CartItemPrice>
        ${item.price}
      </CartItemPrice>
    </Container>
  )
}

export default CartItem

// Style Section

const Container = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
    border-bottom: 1px solid #DDD;
`


const CartItemInfo = styled.div`
  flex-grow: 1;
`


const ImageContainer = styled.div`
    width: 180px;
    height: 180px;
    margin-right: 16px;
    flex-shrink: 0;
    flex-grow: 0;

    img {
        object-fit: contain;
        height: 100%;
        width: 100%;
    }

`


const CartItemInfoTop = styled.div`
    color: #007185;
    h2 {
        font-size: 18px;
    }
`


const CartItemInfoBottom = styled.div`
    display: flex;
    margin-top: 4px;
    @media (max-width: 650px) {
        display: flex;
        flex-direction: column;
      }
`


const CartItemQuantityContainer = styled.div`
  select {
    border-radius: 7px;
    background-color: #F0F2F2;
    padding: 8px;
    box-shadow: 0 2px 5px rgba(15, 17, 17, .15);

    :focus{
      outline: none;
    }
  }

`


const CartItemDeletionContainer = styled.div`
    color: #007185;
    cursor: pointer;
    margin-left: 16px;
`


const CartItemPrice = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-left: 15px;

    @media (max-width: 650px) {
      margin-left: -9px;
    }
    
`

