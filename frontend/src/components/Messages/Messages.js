import React, { useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { MessagesContext } from '../../context/MessagesContext';

const Messages = () => {
  const messagesRef = useRef(null);
  const { allUserMessages, liveUser } = useContext(MessagesContext);
  const { loginUserId } = liveUser;
  useEffect(() => {
    if (messagesRef && messagesRef.current) {
      const element = messagesRef.current;
      element.scroll({
        top: element.scrollHeight,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [messagesRef, allUserMessages]);
  return (
    <MessagesContainer ref={messagesRef}>
      {allUserMessages
        .map((message) => (
          <>
            <MessageBox
              own={loginUserId === message.id}
            >
              {message.messageContent}
            </MessageBox>
            <ProfileName own={loginUserId === message.id}>{message.name}</ProfileName>
          </>
        ))}
    </MessagesContainer>
  );
};
export default Messages;

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 50rem;
  width: 100%;
  font-family:  'Quicksand', sans-serif;
  overflow: auto;
`;
const MessageBox = styled.text`
  font-family:  'Quicksand', sans-serif;
  height: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  border-radius:${({ own }) => (own ? '0.5rem 0.5rem 0 0.5rem' : '0.5rem 0.5rem 0.5rem 0')};
  background-color: ${({ own }) => (own ? '#bbb6c6' : '#6c52a0')};
  align-self: ${({ own }) => (own ? 'flex-end' : 'flex-start')};
  color: ${({ own }) => (own ? null : '#f2f1f4')};
  margin: 1rem 2rem;
  text-align: center;
  min-height: 4rem;
 
  animation-name: createMessage;
  animation-duration: 1s;
  @keyframes createMessage {
    from {opacity: 0;}
    to {opacity: 100%;}
  }
  
  @media screen and (max-width: 1000px){
    padding: 0 0.5rem;
    margin: 0.5rem 1rem;
    min-height: 3rem;
  }
`;
const ProfileName = styled.text`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: ${({ own }) => (own ? 'flex-end' : 'flex-start')};
  text-align: center;
  margin: 0 1rem;
  color: ${({ own }) => (own ? 'darkgray' : '#51348f')};;
  font-size: 12px;
  animation-name: createMessage;
  animation-duration: 0.5s;
  @keyframes createMessage {
    from {opacity: 0;}
    to {opacity: 100%;}
  }
  
`;
