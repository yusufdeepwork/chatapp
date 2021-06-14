import React, { createContext, useState, useEffect } from 'react';
import io from 'socket.io-client';

export const MessagesContext = createContext(undefined, undefined);
const socket = io.connect('https://awesome-chatapp-socketio.herokuapp.com');
const ChatApp = ({ children }) => {
  const [allUserMessages, setAllUserMessages] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [liveUser, setLiveUser] = useState({ isLogin: false, loginUserName: '', loginUserId: '' });

  useEffect(() => {
    socket.on('message', ({ messageContent, id, name }) => {
      setAllUserMessages((prevState) => [...prevState, { messageContent, id, name }]);
    });
  }, []);

  useEffect(() => {
    socket.on('online', ({ userName }) => {
      setOnlineUsers((prevUsers) => [...prevUsers, { userName }]);
    });
  }, []);

  return (
    <MessagesContext.Provider value={{
      allUserMessages, setAllUserMessages, liveUser, setLiveUser, setOnlineUsers, onlineUsers,
    }}
    >
      {children}
    </MessagesContext.Provider>
  );
};
export default ChatApp;
