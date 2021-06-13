import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import { MessagesContext } from '../context/MessagesContext';
import 'react-toastify/dist/ReactToastify.css';
// eslint-disable-next-line import/order
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5555');

const Login = () => {
  const { setLiveUser } = useContext(MessagesContext);
  const [newUserName, setNewUserName] = useState();
  const handleEnter = (event) => (event.key === 'Enter' ? addLiveUser() : null);

  const createLoginUser = () => {
    socket.emit('online', { userName: newUserName });
  };
  const addLiveUser = () => {
    if (newUserName) {
      setLiveUser((prevState) => ({
        ...prevState,
        loginUserName: newUserName,
        isLogin: true,
        loginUserId: (Math.random() * 100).toFixed(0),
      }));
      createLoginUser();
    } else {
      toast.error('Please, type a name!', {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <LoginContainer>
      <LoginInput
        placeholder="enter your name"
        value={newUserName}
        onKeyDown={handleEnter}
        onChange={((event) => setNewUserName(event.target.value))}
      />

      {/* eslint-disable-next-line react/button-has-type */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <LoginButton onClick={() => addLiveUser()}>
        Login
      </LoginButton>
    </LoginContainer>
  );
};
export default Login;
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 70%;
  font-family:  'Quicksand', sans-serif;
`;
const LoginInput = styled.input`
  font-family: inherit;
  width: 60%;
  padding: 1rem;
  font-size: 30px;
  border: none;
  margin: 1rem;
  outline: inherit;
  :focus{
    border:#bbb6c6 solid 4px;
  }
  @media screen and (max-width: 800px){
    font-size: 20px;
  }
  @media screen and (max-width: 550px){
    width: 80%;
    font-size: 15px;
  }
`;
const LoginButton = styled.button`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  height: 3rem;
  width: 15rem;
  border-radius: 1rem;
  font-size: 20px;
 
  margin: 1rem;
  background-color: royalblue;
  border: none;
  color: lightcyan;
  :hover{
    cursor: pointer;
    background-color: deepskyblue;

  }
  @media screen and (max-width: 800px){
    font-size: 15px;
    width: 12rem;
    height: 2rem;
    padding: 0.5rem;
    margin: 0.5rem;
  }
  @media screen and (max-width: 550px){
    width: 40%;
    font-size: 15px;
  }
`;
