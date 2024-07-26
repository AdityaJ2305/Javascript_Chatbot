import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  // Predefined questions and answers
  const qaPairs = [
    { question: "What is your name?", answer: "I am a chatbot created to assist you." },
    { question: "How can you help me?", answer: "I can answer your questions and provide information." },
    { question: "What is JavaScript?", answer: "JavaScript is a programming language used for web development." },
    { question: "What is a chatbot?", answer: "A chatbot is a software application used to conduct online chat conversations." }
  ];

  const findAnswer = (userQuestion) => {
    const match = qaPairs.find(({ question }) => question.toLowerCase() === userQuestion.toLowerCase());
    return match ? match.answer : null;
  };

  const handleSend = () => {
    if (!input.trim()) return; 

    const userMessage = { text: input, type: 'user' };
    const botAnswer = findAnswer(input);

    setMessages((prevMessages) => [
      ...prevMessages,
      userMessage,
      { 
        text: botAnswer || "I couldn't find an answer to your question. [Click here to start live chat](mailto:livechat@company.com).", 
        type: 'bot' 
      }
    ]);

    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            {msg.type === 'bot' && msg.text.includes('[Click here to start live chat]') ? (
              <a href="mailto:livechat@company.com">{msg.text}</a>
            ) : (
              msg.text
            )}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={(e) => e.key === 'Enter' && handleSend()}
        placeholder="Ask a question..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default Chatbot;