import React from 'react'
import styled from 'styled-components'
import { db } from './Firebase'
import { Link } from 'react-router-dom'

function Product({title, price, rating, image, id}) {

  const addToCart = () => {
    const cartItem = db.collection("cartitems").doc(id);
    cartItem.get()
    .then((doc) => {
      console.log(doc)
      if(doc.exists){
        cartItem.update({
          quantity: doc.data().quantity + 1
        })
      } else {
        db.collection("cartitems").doc(id).set({
          name: title,
          image: image,
          price: price,
          quantity: 1
        })
      }
    })
  }

  return (
    <Container>
          <Title>
            {title}
          </Title>
        

        <Price>
        ${price}
        </Price>
        <Rating>
        {
          Array(rating).fill().map(() => <p>⭐</p>)
        }({rating})
        </Rating>
        <Link to={`/preview/${id}`} style={{ textDecoration: 'none' }}>

        <ImageContainer>
          
           <ImageSection src={image}/>
        </ImageContainer>
        </Link>
        
        <ActionSection>
          <AddToCartButton 
            onClick = {addToCart}
          >
            Add to Cart
          </AddToCartButton>
        </ActionSection>
    </Container>
  )
}

export default Product

// Style section

const Container = styled.div`
    border-radius: 1rem;
    background-color: white;
    z-index: 100;
    flex: 1;
    padding: 20px;
    margin: 10px;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    box-shadow: 5px 5px 1rem #cbcbfbf3;
    filter: brightness(100%);
      
      &:hover{
        filter: brightness(92%);
        transition:all 0.2s ease-in;
      }
`


const Title = styled.p`
  
`


const Price = styled.p`
  font-weight: 500;
  margin-top: 3px;
`


const Rating = styled.div`
    display: flex;
`


const ImageSection = styled.img`
      max-height: 200px;
      object-fit: contain;    
`


const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    margin-top: 1rem;
`


const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  place-items: center;
  justify-content: center;
`


const AddToCartButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #f0c14b;
  border: 2px solid #a88734;
  border-radius: 2px;
  cursor: pointer;
`