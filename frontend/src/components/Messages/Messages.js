import React, { useContext } from 'react';
import styled from 'styled-components';
import { MessagesContext } from '../../context/MessagesContext';

const Messages = () => {
  const { allMessages } = useContext(MessagesContext);
  // eslint-disable-next-line max-len
  return <MessagesContainer>{allMessages.map((message) => <h1>{message.messageContent}</h1>)}</MessagesContainer>;
};
export default Messages;

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 100%;
`;
