import React from 'react';
import styled from 'styled-components';
import MessagingHeader from './MessagingHeader';
import MessagingFooter from './MessagingFooter';
import Messages from './Messages';

const MessagingBox = () => (
  <MessagingBoxContainer>
    <MessagingHeader
      userName="Ramazandadf"
      userImage="https://i4.hurimg.com/i/hurriyet/75/750x0/5efd6baa45d2a04ed8f57254"
    />
    <Messages />
    <MessagingFooter />
  </MessagingBoxContainer>
);
export default MessagingBox;

const MessagingBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 70%;
  border-radius:  0 2rem 2rem 0;
`;
