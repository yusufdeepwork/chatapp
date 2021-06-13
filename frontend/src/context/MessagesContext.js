import React, { createContext, useState, useEffect } from 'react';
import io from 'socket.io-client';

export const MessagesContext = createContext(undefined, undefined);
const socket = io.connect('http://localhost:5555');
const ChatApp = ({ children }) => {
  const [allUserMessages, setAllUserMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [liveUser, setLiveUser] = useState({ isLogin: false, loginUserName: '', loginUserId: '' });

  useEffect(() => {
    socket.on('message', ({ messageContent, id, name }) => {
      setAllUserMessages((prevState) => [...prevState, { messageContent, id, name }]);
    });
  }, []);

  useEffect(() => {
    socket.on('online', ({ userName }) => {
      setUsers((prevUsers) => [...prevUsers, { userName }]);
    });
  }, []);

  return (
    <MessagesContext.Provider value={{
      allUserMessages, setAllUserMessages, liveUser, setLiveUser, setUsers, users,
    }}
    >
      {children}
    </MessagesContext.Provider>
  );
};
export default ChatApp;
