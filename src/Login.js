import React from 'react'
import styled from 'styled-components'
import { auth, githubProvider, provider } from './Firebase'
import { signInWithPopup } from 'firebase/auth'

function Login({ setUser }) {

    const signin = () => {
        signInWithPopup(auth, provider).then((result) => {
            let user = result.user;
            let newUser = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }
            localStorage.setItem('user', JSON.stringify(newUser))
            setUser(newUser);

        }).catch((error) => {
            alert(error.message);
        })

    }

    const githubSignin = () => {
        signInWithPopup(auth, githubProvider).then((result) => {
            let user = result.user;
            let newUser = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }
            localStorage.setItem('user', JSON.stringify(newUser))
            setUser(newUser);

        }).catch((error) =>{
            alert(error.message)
        })
    }
    

  return (
    <Container>
      <Content>
        <AmazonLogo src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG'/>
        <h1>Sign into Amazon</h1>
        <LoginOptions>
            <LoginButton
                onClick={signin}
            >
                
            <GoogleIcon>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="22" height="22"
                viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
            </GoogleIcon>

            <span> Sign in with Google</span>
            </LoginButton>
            <LoginButton onClick={githubSignin}>
                <img src="https://img.icons8.com/material-outlined/24/null/github.png" width="22" height="22" alt='github-icon'/>
                <span> Sign in with Github</span>
            </LoginButton>
        </LoginOptions>
      </Content>
    </Container>
  )
}

export default Login

// Style Section

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    display: grid;
    place-items: center;
`


const Content = styled.div`
    padding: 100px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 1px 3px gray;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`


const AmazonLogo = styled.img`
    height: 100px;
    margin-bottom: 40px;
`


const GoogleIcon = styled.div`
`


const LoginButton = styled.button`
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 20px;
    background-color: #f0c14b;
    border-radius: 0.5rem;
    padding: 0.8rem;
    height: 40px;
    border: 2px solid #a88734;
    cursor: pointer;
`


const LoginOptions = styled.div`
    margin-top: 30px;
`