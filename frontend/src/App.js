import React, { useContext } from 'react';
import styled from 'styled-components';
import { ChatsBox, Login, MessagingBox } from './components';
import { MessagesContext } from './context/MessagesContext';

function App() {
  const { liveUser } = useContext(MessagesContext);

  return (
    <ChatAppBody>
      <ChatAppContainer>
        <ChatsBox />
        {liveUser.isLogin ? <MessagingBox /> : <Login />}
      </ChatAppContainer>
    </ChatAppBody>
  );
}

export default App;
const ChatAppBody = styled.div`
  display: flex;
  height:100vh;
  width: 100%;
  background-color: #c2bcce;
  justify-content: center;
  align-items: center;
  

;
`;
const ChatAppContainer = styled.div`
  display: flex;
  height: 80%;
  width: 70%;
  border-radius: 2rem;
  background-color: #f2f1f4;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 550px){
    justify-content: center;
  }
`;
