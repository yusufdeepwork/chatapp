import React, { createContext, useState } from 'react';

export const MessagesContext = createContext(undefined, undefined);

const ChatApp = ({ children }) => {
  // const messageContext = {
  //   userId: null,
  //   userName: null,
  //   userProfilePhoto: '',
  //   messageContent: '',
  // };
  const [allMessages, setAllMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  // eslint-disable-next-line no-console
  console.log(users, 'all messages');

  return (
    <MessagesContext.Provider value={{
      allMessages, setAllMessages, isLogin, setIsLogin, setUsers, users,
    }}
    >
      {children}
    </MessagesContext.Provider>
  );
};
export default ChatApp;
