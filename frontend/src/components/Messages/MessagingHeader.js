import React from 'react';
import styled from 'styled-components';

const MessagingHeader = ({ userImage, userName }) => (
  <HeaderContainer>
    <ProfilePhoto src={userImage} alt="chat" />
    <ProfileName>{userName}</ProfileName>
  </HeaderContainer>
);
export default MessagingHeader;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 12%;
  width: 100%;
  border-bottom: #cecece 1px solid;
`;
const ProfilePhoto = styled.img`
  object-fit: cover;
  margin-left: 3rem;
  border-radius: 2rem;
  width: 3rem;
  height: 3rem;
`;
const ProfileName = styled.text`
  margin-left: 3rem;
  font-size: 30px;
  font-weight: bold;
  font-family:  'Quicksand', sans-serif;;
`;
