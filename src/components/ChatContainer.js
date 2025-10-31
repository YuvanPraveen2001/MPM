import React from 'react';
import Sidebar from './Sidebar';
import ChatMain from './ChatMain';

const ChatContainer = () => {
  return (
    <div className="chat-bot-container active" id="chatContainer">
      <Sidebar />
      <ChatMain />
    </div>
  );
};

export default ChatContainer;
