import React, { useState } from "react";

function ChatApp() {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setChatHistory([...chatHistory, message]);
    setMessage("");
  };

  return (
    <div className="chat-container">
      <div className="chat-history">
        {chatHistory.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message here"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatApp;
