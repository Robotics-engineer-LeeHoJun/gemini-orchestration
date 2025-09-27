import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow.js';
import FileUploader from './components/FileUploader.js';

function App() {
  const [messages, setMessages] = useState([]);
  const [session, setSession] = useState(null);

  const handleCreateSession = async () => {
    const newSession = await window.electronAPI.createSession('/path/to/project');
    setSession(newSession);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    const response = await window.electronAPI.sendMessage(message);
    setMessages([...messages, { sender: 'user', content: message }, { sender: 'agent', content: response.content }]);
    e.target.message.value = '';
  };

  return (
    <div className="App">
      {!session && <button onClick={handleCreateSession}>Create Session</button>}
      {session && (
        <>
          <ChatWindow messages={messages} />
          <form onSubmit={handleSendMessage}>
            <input type="text" name="message" />
            <button type="submit">Send</button>
          </form>
          <FileUploader />
        </>
      )}
    </div>
  );
}

export default App;
