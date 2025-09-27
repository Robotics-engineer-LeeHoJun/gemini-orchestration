import React from 'react';
import Message from './Message.js';

function ChatWindow({ messages }) {
  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <Message key={index} sender={msg.sender} content={msg.content} />
      ))}
    </div>
  );
}

export default ChatWindow;
