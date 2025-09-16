import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Post() {
  const location = useLocation();
  const navigate = useNavigate();

  const { username, users } = location.state || {};

  const [postText, setPostText] = useState('');
  const [posts, setPosts] = useState([]);

  const handlePost = () => {
    if (!postText.trim()) return;
    setPosts(prev => [...prev, { id: prev.length + 1, author: username, text: postText.trim(), time: new Date().toLocaleString() }]);
    setPostText('');
  };

  return (
    <div style={{
      maxWidth: 600,
      margin: '20px auto',
      padding: 20,
      fontFamily: 'Arial, sans-serif',
    }}>
      <button
        onClick={() => navigate('/alumni-main', { state: { username, users } })}
        style={{
          marginBottom: 20,
          padding: '6px 12px',
          borderRadius: 6,
          border: 'none',
          backgroundColor: '#08AEEA',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        ← Back
      </button>

      <h2>Create a Post</h2>

      <textarea
        rows={4}
        style={{ width: '100%', padding: 10, fontSize: '1rem', borderRadius: 6, border: '1px solid #ccc', resize: 'vertical' }}
        placeholder="Write your post here..."
        value={postText}
        onChange={e => setPostText(e.target.value)}
      />

      <button
        onClick={handlePost}
        disabled={!postText.trim()}
        style={{
          marginTop: 10,
          padding: '10px 20px',
          fontSize: '1rem',
          borderRadius: 6,
          border: 'none',
          backgroundColor: postText.trim() ? '#08AEEA' : '#ccc',
          color: 'white',
          cursor: postText.trim() ? 'pointer' : 'not-allowed',
        }}
      >
        Post
      </button>

      <div style={{ marginTop: 30 }}>
        <h3>Your Posts</h3>
        {posts.length === 0 && <p>No posts yet.</p>}
        {posts.map(({ id, author, text, time }) => (
          <div key={id} style={{ marginBottom: 15, padding: 10, border: '1px solid #ddd', borderRadius: 6 }}>
            <div style={{ fontWeight: 'bold', marginBottom: 5 }}>{author} ({time})</div>
            <div>{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
