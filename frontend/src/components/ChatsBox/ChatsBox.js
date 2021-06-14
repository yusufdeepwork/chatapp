import React, { useContext } from 'react';
import styled from 'styled-components';
import { MessagesContext } from '../../context/MessagesContext';

const ChatsBox = () => {
  const { onlineUsers } = useContext(MessagesContext);
  return (
    <ChatsBoxContainer>
      <Header>Online Users</Header>
      <OnlineUsers>{onlineUsers.map((user) => <OnlineUser>{` 👋 ${user.userName} `}</OnlineUser>)}</OnlineUsers>
    </ChatsBoxContainer>
  );
};
export default ChatsBox;

const ChatsBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 30%;
  border-radius:  2rem 0 0 2rem;
  border-right: #cecece 1px solid;
  font-family:  'Quicksand', sans-serif;

  @media screen and (max-width: 550px){
    display: none;
    font-size: 10px;
  }
  @media screen and (max-width: 700px){
    font-size: 10px;
  }
`;
const Header = styled.div`
  height: 8.9rem;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: #cecece 1px solid;
  width: 100%;
  
  @media screen and (max-width: 900px){
    font-size: 20px;
  }
`;
const OnlineUsers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const OnlineUser = styled.div`
  border-bottom: #cecece 1px solid;
  display: flex;
  text-align: center;
  height: 4rem;
  width: 100%;
  font-size: 30px;
  min-height: 4rem;
  align-items: center;
  justify-content: flex-start ;
  padding-left:10px;
  
  :hover{
    color: plum;
  }

  @media screen and (max-width: 1000px){
    font-size: 20px;
  }
`;
