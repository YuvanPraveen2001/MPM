import React from 'react';
import Header from './Header';
import MessageInput from './MessageInput';

const ChatMain = () => {
  return (
    <div className="chat-main">
      <Header />
      <div className="chat-content">
        <div className="chat-messages" id="chatMessages" role="log" aria-live="polite" aria-relevant="additions">
          {/* Messages will be populated here */}
        </div>
        <MessageInput />
        <button className="scroll-to-bottom" id="scrollToBottomBtn" title="Scroll to latest">▼ New messages</button>
      </div>
    </div>
  );
};

export default ChatMain;
