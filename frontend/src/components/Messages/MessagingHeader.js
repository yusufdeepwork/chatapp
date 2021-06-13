import React, { useContext } from 'react';
import styled from 'styled-components';
import { MessagesContext } from '../../context/MessagesContext';

const MessagingHeader = () => {
  const { liveUser } = useContext(MessagesContext);
  const { loginUserName } = liveUser;

  return (
    <HeaderContainer>
      <ProfileName>{`Welcome ${loginUserName} 👋 \n  Talk Everything`}</ProfileName>
    </HeaderContainer>
  );
};
export default MessagingHeader;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12%;
  width: 100%;
  border-bottom: #cecece 1px solid;
  @media screen and (max-width: 550px ){
  }
`;
// const ProfilePhoto = styled.img`
//   object-fit: cover;
//   margin-left: 3rem;
//   border-radius: 2rem;
//   width: 3rem;
//   height: 3rem;
// `;
const ProfileName = styled.text`
  font-size: 25px; 
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family:  'Quicksand', sans-serif;
  @media screen and (max-width: 800px ){
    font-size: 15px;
  }

`;
