"use client";

import { useState } from "react";

const ChatGPT = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<{ user: string; bot: string }[]>([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;
    setMessage("");
    setChat((prev) => [...prev, { user: userMessage, bot: "..." }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      setChat((prev) =>
        prev.map((entry, idx) =>
          idx === prev.length - 1 ? { ...entry, bot: data.reply } : entry
        )
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div>
        {chat.map((entry, index) => (
          <div key={index}>
            <p>
              <strong>Вы:</strong> {entry.user}
            </p>
            <p>
              <strong>Бот:</strong> {entry.bot}
            </p>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Введите сообщение..."
      />
      <button onClick={sendMessage}>Отправить</button>
    </div>
  );
};

export default ChatGPT;
