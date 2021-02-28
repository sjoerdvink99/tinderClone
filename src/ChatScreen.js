import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

export default function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image: "",
      message: "Hey",
    },
    {
      name: "Ellen",
      image: "",
      message: "How is it going?",
    },
    {
      message: "Good!",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className='chatScreen'>
      <p className='chatScreen__timestamp'>
        YOU MATCHED WITH ELLEN ON 10/08/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className='chatScreen__message'>
            <Avatar
              src={message.image}
              className='chatScreen__image'
              alt={message.name}
            />
            <p className='chatScreen__text'>{message.message}</p>
          </div>
        ) : (
          <div className='chatScreen__message'>
            <p className='chatScreen__textUser'>{message.message}</p>
          </div>
        )
      )}
      <form className='chatScreen__input'>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type='text'
          placeholder='Type a message'
          className='chatScreen__inputField'
        />
        <button
          onClick={handleSend}
          type='submit'
          className='chatScreen__inputButton'
        >
          Send
        </button>
      </form>
    </div>
  );
}
