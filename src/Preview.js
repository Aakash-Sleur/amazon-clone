import React, { useEffect, useState } from 'react'
import { db } from './Firebase'
import {  onSnapshot, doc } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

function Preview() {
    const {id} = useParams()
    const [previewItem, setPreviewItem] = useState({})
    const [loading, setLoading] = useState(true)
    
    const getPreviewItem = () => {
      const docref = doc(db, 'products', id)
      onSnapshot(docref, (doc) => {
      console.log(doc.data(), doc.id)
      let item = {
        product: doc.data()
      }
      setPreviewItem(item)
      setLoading(false)
    })
    }


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
            name: previewItem.product.name,
            image: previewItem.product.image,
            price: previewItem.product.price,
            quantity: 1
          })
        }
      })
    }
    
 
    useEffect(() => {
      getPreviewItem()
      // addToCart()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    
      loading ? (<p>Loading</p>):(
        <Container>
          <PreviewSection>
            <ImageSection>
              <CartImage src={previewItem.product.image} alt={'productimage'}/>
            </ImageSection>
            <DetailsSection>
              <TitleSection>{previewItem.product.name}</TitleSection>
              <DescriptionSection>{previewItem.product.details}</DescriptionSection>
              <BottomSection>
                <PriceSection>
                <h4>${previewItem.product.price}</h4>
                </PriceSection>
                <ButtonContainer>
                  <AddToCartButton onClick={() => addToCart()}>Add to Cart</AddToCartButton>
                </ButtonContainer>
              </BottomSection>
            </DetailsSection>
          </PreviewSection>
        </Container>
      )
    
  )
}

export default Preview

// Style section


const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 1rem black;
  padding: 2rem;
`


const ImageSection = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  box-shadow: 10px 5px 1rem #cbcbfbf3;
  height: 500px;
  width: 100%;
  border-radius: 1rem;
`


const CartImage = styled.img`
  max-width: 300px;
  max-height: 300px;
  min-width: 100%;
  min-height: 90%;
  transition: transform .5s;
  object-fit: contain;

  &:hover{
    -ms-transform: scale(1.5, 1.5);
    -webkit-transform: scale(1.5, 1.5);
    transform: scale(1.5, 1.5);
  }
  
`


const DetailsSection = styled.div`
  padding: 1rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
`


const TitleSection = styled.div`
  text-overflow: ellipsis;
  font-size: 1rem;
  font-weight: 700;
  border-bottom: 1px solid black;
  padding-bottom: 0.5rem;
`


const DescriptionSection = styled.div`
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  text-align: justify;
`


const PriceSection = styled.div`
  display: flex;
  align-items: baseline;
`


const BottomSection = styled.div`
  margin-top: auto;
  padding: 1rem;
`


const AddToCartButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #f0c14b;
  border: 2px solid #a88734;
  border-radius: 2px;
  cursor: pointer;
`


const PreviewSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 2rem;
  padding-top: 4rem;
`


const ButtonContainer = styled.div`
  margin-top: 1rem;
`