import React, { useState, useEffect, useContext } from 'react';
import io from 'socket.io-client';
import styled from 'styled-components';
import { ChatsBox, Login, MessagingBox } from './components';
import { MessagesContext } from './context/MessagesContext';

const socket = io.connect('http://localhost:5555');

function App() {
  const [message, setMessage] = useState({ context: '', name: '' });
  const [chat, setChat] = useState([]);

  const { liveUser } = useContext(MessagesContext);

  useEffect(() => {
    socket.on('message', ({ context, name }) => {
      setChat([...chat, { context, name }]);
    });
  }, [chat]);

  const onTextChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = (e) => {
    e.preventDefault();
    const { context, name } = message;
    socket.emit('message', { context, name });
    setMessage({ context: '', name: '' });
  };

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
`;
