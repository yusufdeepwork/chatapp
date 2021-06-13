import React from 'react';
import styled from 'styled-components';
import MessagingHeader from './MessagingHeader';
import MessagingFooter from './MessagingFooter';
import Messages from './Messages';

const MessagingBox = () => (
  <MessagingBoxContainer>
    <MessagingHeader />
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
  @media screen and (max-width: 550px){
    width: 70vw;
    border-radius: 2rem;
  }
`;
