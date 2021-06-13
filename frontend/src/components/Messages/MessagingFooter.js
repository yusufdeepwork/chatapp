import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { FaTelegram } from 'react-icons/fa';
import io from 'socket.io-client';
import { ToastContainer, toast } from 'react-toastify';
import { MessagesContext } from '../../context/MessagesContext';
import 'react-toastify/dist/ReactToastify.css';

const socket = io.connect('http://localhost:5555');

const MessagingFooter = () => {
  const { liveUser } = useContext(MessagesContext);
  const [messageContent, setMessageContent] = useState();
  const { loginUserId: id, loginUserName: name } = liveUser;

  const sendMessage = () => {
    if (messageContent) {
      socket.emit('message', { messageContent, id, name });
      setMessageContent('');
    } else {
      toast.error('Please, type a message! ', {
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

  const handleEnter = (event) => (event.key === 'Enter' ? sendMessage() : null);
  return (
    <FooterContainer>
      <MessageInput
        value={messageContent}
        onChange={(event) => setMessageContent(event.target.value)}
        onKeyDown={handleEnter}
        placeholder="type message here"
      />
      <SendIcon
        size={40}
        onClick={() => sendMessage()}
      />
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
    </FooterContainer>
  );
};

export default MessagingFooter;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  width: 100%;
  border-radius:  0 0 2rem 0;
  border-top: #cecece 1px solid;
`;

const MessageInput = styled.input`
  font-family:  'Quicksand', sans-serif;
  padding: 0 1rem;
  width: 70%;
  font-size: 20px;
  height: 3rem;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  
  @media screen and (max-width: 550px){
    border-radius: 3rem;
    margin-left: 10px;
    padding: 0 0.5rem;
  }
`;
const SendIcon = styled(FaTelegram)`
  cursor: pointer;
  margin: 1rem;
  color: #6c52a0;
`;
