import React from 'react';
import styled from 'styled-components';

const MessagingBox = () => <MessagingBoxContainer>Messaging Box</MessagingBoxContainer>;
export default MessagingBox;

const MessagingBoxContainer = styled.div`
  display: flex;
  background-color: #f2f2f2;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 70%;
  border-radius:  0 2rem 2rem 0;
`;
