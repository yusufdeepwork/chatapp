import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { MessagesContext } from '../context/MessagesContext';

const Login = () => {
  const { setIsLogin, setUsers } = useContext(MessagesContext);
  const [newUserName, setNewUserName] = useState('');
  const createUser = () => {
    // eslint-disable-next-line max-len
    setUsers((prevUsers) => [...prevUsers, { userName: newUserName, id: (Math.random() * 100).toFixed(0) }]);
  };

  return (
    <LoginContainer>
      <input
        placeholder="enter your name"
        onChange={((event) => setNewUserName(event.target.value))}
      />
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={() => {
        setIsLogin(true);
        createUser();
      }}
      >
        Login & Enjoy Talking
      </button>
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
`;
