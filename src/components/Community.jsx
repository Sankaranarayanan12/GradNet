import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Community() {
  const location = useLocation();
  const navigate = useNavigate();

  const { currentUser, users } = location.state || {};
  const otherUser = users?.find(user => user.username !== currentUser)?.username || 'Unknown';

  const [messages, setMessages] = useState([
    { id: 1, author: otherUser, text: `Hi ${currentUser}! Welcome to the alumni chat.`, time: '10:00 AM' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage = {
      id: messages.length + 1,
      author: 'You',
      text: input.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages(prev => [...prev, newMessage]);
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleBack = () => {
    navigate('/alumni-main', { state: { username: currentUser, users } });
  };

  return (
    <div style={{ maxWidth: 600, margin: '20px auto', border: '1px solid #ccc', borderRadius: 10, height: 500, display: 'flex', flexDirection: 'column', fontFamily: 'Arial, sans-serif' }}>
      
      <div style={{ padding: 15, borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={handleBack} style={{ padding: '6px 12px', borderRadius: 6, border: 'none', backgroundColor: '#08AEEA', color: '#fff', cursor: 'pointer' }}>
          ← Back
        </button>
        <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#444' }}>
          Chatting with {otherUser}
        </div>
        <div style={{ width: 64 }} /> {/* space holder for balance */}
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: 15 }}>
        {messages.map(({ id, author, text, time }) => (
          <div key={id} style={{ marginBottom: 12 }}>
            <div style={{ fontWeight: 'bold', color: author === 'You' ? '#007BFF' : '#333' }}>
              {author} <span style={{ color: '#888', fontSize: '0.85rem', marginLeft: 8 }}>{time}</span>
            </div>
            <div>{text}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div style={{ display: 'flex', padding: 10 }}>
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          style={{ flex: 1, padding: 10, fontSize: '1rem', borderRadius: 6, border: '1px solid #ccc', marginRight: 10 }}
        />
        <button onClick={handleSend} style={{ padding: '10px 20px', fontSize: '1rem', borderRadius: 6, border: 'none', backgroundColor: '#08AEEA', color: 'white', cursor: 'pointer' }}>
          Send
        </button>
      </div>
    </div>
  );
}
