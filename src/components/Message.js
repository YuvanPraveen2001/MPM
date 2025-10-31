import React from 'react';

const Message = ({ isUser, content }) => {
  return (
    <div className={`message ${isUser ? 'user' : 'bot'}`}>
      <div className="message-avatar">{isUser ? '👤' : 'HA'}</div>
      <div className="message-content" dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
};

export default Message;
