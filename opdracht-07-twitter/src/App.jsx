import { useState } from "react";
import CreateMessage from "./components/CreateMessage.jsx";
import MessageList from "./components/MessageList.jsx";

function App() {
  
  const [message, setMessage] = useState("");

  
  const [messages, setMessages] = useState([]);

  
  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function handleMessageSubmit(event) {
    event.preventDefault();

    const trimmed = message.trim();
    if (!trimmed) return; 

    setMessages((prevMessages) => [...prevMessages, trimmed]);

    setMessage("");
  }

  return (
    <div className="app">
      <h1>Mini Twitter</h1>
      <p>Post een bericht en zie het hieronder verschijnen.</p>

      <CreateMessage
        message={message}
        onMessageChange={handleMessageChange}
        onMessageSubmit={handleMessageSubmit}
      />

      <MessageList messages={messages} />
    </div>
  );
}

export default App;