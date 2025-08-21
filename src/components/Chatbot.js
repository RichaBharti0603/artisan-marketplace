import React, { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow-md w-80">
      <div className="h-60 overflow-y-auto mb-2 border p-2 rounded">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-1 ${
              msg.from === "bot" ? "text-blue-600" : "text-green-600"
            }`}
          >
            <b>{msg.from === "bot" ? "Bot" : "You"}:</b> {msg.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-l px-2"
          placeholder="Type..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-3 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
}
