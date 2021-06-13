import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { FaTelegram } from 'react-icons/fa';
import { MessagesContext } from '../../context/MessagesContext';

const MessagingFooter = () => {
  const { setAllMessages, allMessages } = useContext(MessagesContext);
  const [messageContent, setMessageContent] = useState();

  const handleEnter = (e) => (e.key === 'Enter' ? setAllMessages([...allMessages, { messageContent }]) : null);
  return (
    <FooterContainer>
      <MessageInput
        onChange={(event) => setMessageContent(event.target.value)}
        onKeyDown={handleEnter}
        placeholder="type message here"
      />
      <SendIcon size={50} onClick={() => setAllMessages([...allMessages, { messageContent }])} />
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
  height: 2rem;
  outline: none;
  border: none;
`;
const SendIcon = styled(FaTelegram)`
  cursor: pointer;
  margin: 1rem;
  color: #6c52a0;
`;
