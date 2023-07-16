import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'


function CartItems({ cartItems }) {
    console.log(cartItems.length)
    return (
        
        <Container>
            <Title>Shopping Cart</Title>
            <hr />
            {(cartItems.length === 0) ? (
                <EmptyDetailsContainer>
                <EmptyImage src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" alt='empty-svg'/>
                <EmptyDisplayText>Cart is Empty</EmptyDisplayText>
                </EmptyDetailsContainer>
            )
        :(
            <ItemsContainer>
                {
                    cartItems.map((item, index)=>(
                        <CartItem 
                            id={item.id}
                            item={item.product}
                            key={index}
                        />
                    ))
                }
            </ItemsContainer>
        )}
        </Container>
        
    )
}

export default CartItems

// Style section

const Container = styled.div`
    flex: 0.8;
    margin-right: 18px;
    padding: 14px 18px 0 18px;
    background-color: white;
    border-radius: 1rem;
    margin-bottom: 1rem;
    width: 100%;
 
`


const Title = styled.h1`
    margin-bottom: 8px;
`


const ItemsContainer = styled.div``


const EmptyDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


const EmptyImage = styled.img`
    height: 400px;
    width: 300px;
`


const EmptyDisplayText = styled.h3`
    color: gray;
    margin-top: -10rem;
    font-size: 3rem;
    text-align: center;
    margin-bottom: 1rem;
`