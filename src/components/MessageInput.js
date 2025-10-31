import React from 'react';

const MessageInput = () => {
  return (
    <div className="input-container">
      <textarea
        rows="2"
        className="message-input"
        id="messageInput"
        placeholder="Type your message... (Shift+Enter for newline)"
      ></textarea>
      <button className="send-btn" id="sendBtn">
        ➤
      </button>
    </div>
  );
};

export default MessageInput;
