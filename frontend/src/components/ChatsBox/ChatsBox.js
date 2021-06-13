import React from 'react';
import styled from 'styled-components';

const ChatsBox = () => <ChatsBoxContainer>Chat Box</ChatsBoxContainer>;
export default ChatsBox;

const ChatsBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 30%;
  border-radius:  2rem 0 0 2rem;
  border-right: #cecece 1px solid;
`;
