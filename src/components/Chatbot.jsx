import React, { useState } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "I've detected you are in an emergency. I have already alerted your emergency contacts. How can I help you further?",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMsg = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer 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',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are an emergency assistant chatbot.' },
            { role: 'user', content: input },
          ],
          temperature: 0.5,
        }),
      });

      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || 'Currently I do not have Api';
      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Error contacting AI. Try again later.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-bot-container border-none w-full max-w-md h-[500px] bg-white shadow-md rounded-lg flex flex-col overflow-hidden border">
      {/* Header */}
      <div className="bg-[#ff2525] text-white font-semibold text-lg px-4 py-3">AI Assistant</div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 bg-gray-50">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[80%] px-4 py-2 rounded-lg text-sm ${
              msg.sender === 'user'
                ? 'ml-auto bg-gray-200 text-gray-800'
                : 'mr-auto bg-gray-200 text-gray-800'
            }`}
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="text-xs text-gray-500 italic">Typing...</div>
        )}
      </div>

      {/* Input Area */}
      <div className="flex border-none px-2 py-2 bg-white gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 px-3 py-2 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-[#FF2525]"
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-[#ff2525] hover:bg-[#ff6c6c] text-white text-sm px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? '...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
