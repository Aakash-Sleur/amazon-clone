import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import Product from './Product'
import { db } from './Firebase'


function Home() {
  const [products, setProducts] = useState([]) 

  const getProducts = () => {
    db.collection('products').onSnapshot((snapshot) => {
      let tempProducts = []

      tempProducts = snapshot.docs.map((doc) => (
        {
          id: doc.id,
          product: doc.data(),
        }

      ))

      setProducts(tempProducts);
      });
  }
  useEffect(() => {
    console.log('call products')
    getProducts()
  }, [])

  console.log(products)

  return (
    <Container>
      <Banner>

      </Banner>
      <Content>
        {
          products.map((data, index) => (
              <Product
                title = {data.product.name}
                price = {data.product.price}
                rating = {data.product.rating}
                image = {data.product.image}
                id = {data.id}
                key={index}
              />
          ))
        }        
      </Content>
    </Container>
  )
}

export default Home

// Style Section

const Container = styled.div`
  
`


const Banner = styled.div`
  background-image: url('https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/PD22/GW/thankyou_pc.jpg');
  min-height: 30rem;
  background-position: center;
  background-size: cover;
  z-index: 1;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))
`


const Content = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin-top: -89px;
  display: flex;
  flex-wrap: wrap;

  & > * {
    flex: 1 1 auto;
  }
`
