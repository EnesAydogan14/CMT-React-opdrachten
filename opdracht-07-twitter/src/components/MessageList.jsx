import Message from "./Message.jsx";

function MessageList({ messages }) {
  if (messages.length === 0) {
    return <p>Er zijn nog geen berichten. Post de eerste!</p>;
  }

  return (
    <ul>
      {messages.map((text, index) => (
        <Message key={index} text={text} />
      ))}
    </ul>
  );
}

export default MessageList;