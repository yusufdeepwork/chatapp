import React, { useContext } from 'react';
import styled from 'styled-components';
import Typical from 'react-typical';
import { MessagesContext } from '../../context/MessagesContext';

const MessagingHeader = () => {
  const { liveUser } = useContext(MessagesContext);
  const { loginUserName } = liveUser;

  return (
    <HeaderContainer>
      <ProfileName>
        {' '}
        <Typical
          steps={[`Welcome ${loginUserName} 👋`, 5000, 'Talk Everything', 2000,
            'You can talk about : ', 3000,
            ' birds🐦', 3000,
            '🐈cats ', 3000,
            '💐flowers', 3000,
            'You can talk about everything🌱', 3000,
          ]}
          loop={Infinity}
          wrapper="p"
        />

      </ProfileName>
      <Chatting />
    </HeaderContainer>
  );
};
export default MessagingHeader;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 8rem;
  width: 100%;
  border-bottom: #cecece 1px solid;
  @media screen and (max-width: 600px ){
    height: 4rem;
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
  font-size: 30px; 
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family:  'Quicksand', sans-serif;
  @media screen and (max-width: 600px ){
    font-size: 17px;
  }

`;
const Chatting = styled.div`   
  font-size: 25px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family:  'Quicksand', sans-serif;
  @media screen and (max-width: 600px ){
    font-size: 17px;
  }
`;
