function CreateMessage({ message, onMessageChange, onMessageSubmit }) {
  return (
    <form onSubmit={onMessageSubmit}>
      <input
        type="text"
        placeholder="Typ een bericht..."
        value={message}               
        onChange={onMessageChange}    
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default CreateMessage;