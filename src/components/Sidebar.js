import React from 'react';

const Sidebar = () => {
  return (
    <div className="chat-sidebar">
      <div className="sidebar-header">
        <h1>AI Assist</h1>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button className="new-chat-btn" id="newChatBtn">
          <span>+</span>
          New Chat
        </button>
      </div>
      <div className="saved-chats">
        <div className="saved-chats-header">Saved Chats</div>
        <div id="savedChatsList">
          {/* Saved chats will be populated here */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
