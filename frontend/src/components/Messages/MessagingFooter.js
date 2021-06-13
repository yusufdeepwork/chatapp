import React from 'react';
import styled from 'styled-components';
import { FaTelegram } from 'react-icons/fa';

const MessagingFooter = () => (
  <FooterContainer>
    <MessageInput placeholder="type message here" />
    <SendIcon size={50} />
  </FooterContainer>
);
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
