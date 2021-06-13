import React from 'react';
import styled from 'styled-components';
import MessagesHeader from './MessagesHeader';
// import MessagesFooter from './MessagesFooter';
// import Messages from './Messages';

const MessagingBox = () => (
  <MessagingBoxContainer>
    <MessagesHeader />
    {/* <Messages /> */}
    {/* <MessagesFooter /> */}
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
