import Header from './Header';
import { useState, useEffect } from 'react';
import './App.css';
import Cart from './Cart';
import Home from './Home';
import Preview from './Preview';
import {
  Route, Routes
} from 'react-router-dom';
import styled from 'styled-components'
import {db, auth} from './Firebase'
import Login from './Login';
import { signOut } from 'firebase/auth';



function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [cartItems, setCartItems ] = useState([])

  const getCartItems = () => {
    db.collection('cartitems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }))
      setCartItems(tempItems);
    })
  } 

  const signoutOption = () => {
    signOut(auth).then(() => {
      localStorage.removeItem('user')
      setUser(null)
    })
  }

  const getCount = () => {
    let count = 0;
    // Loop through all the cart items

    cartItems.forEach((item) => {
      count += item.product.quantity
    })

    return count;

  }

  useEffect(() => {
    getCartItems()
  }, [])
  // console.log("User", user);


  return (
    
      !user ? (
        <Login setUser={setUser}/>
      ):(

      <Container>
        <Header 
          signout = {signoutOption}
          cartItems = {cartItems}
          user = {user}
          getCount = {getCount}
        />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/preview/:id' element={<Preview />} />

          <Route path="/cart" element={<Cart 
          cartItems = {cartItems}/>} 

          />

        </Routes>
      </Container>
      )
  
  );
}

export default App;

// Style Section

const Container = styled.div`
    background-color: #EAEDED;
    overflow: hidden;
`
