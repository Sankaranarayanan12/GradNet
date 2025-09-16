import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Alumnilogin2() {
  const location = useLocation();
  const { currentUser, users } = location.state || {};
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const style = {
    backgroundImage: 'linear-gradient(90deg, #08AEEA 0%, #2AF598 100%)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const boxStyle = {
    background: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '350px',
    padding: '34px 32px',
    borderRadius: '14px',
  };

  const headingStyle = {
    color: '#171717',
    marginBottom: '30px',
    fontWeight: 'bold',
    fontSize: '2rem',
    letterSpacing: '0.5px',
  };

  const inputStyle = {
    width: '100%',
    padding: '13px 15px',
    marginBottom: '18px',
    borderRadius: '7px',
    border: 'none',
    fontSize: '1rem',
    background: '#fff',
    color: '#171717',
    outline: 'none',
    boxSizing: 'border-box',
    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
  };

  const buttonStyle = {
    width: '100%',
    padding: '15px 0',
    marginTop: '3px',
    border: 'none',
    borderRadius: '12px',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    background: 'linear-gradient(90deg, #b2d8fe 0%, #c4f0e8 100%)',
    boxShadow: '0 4px 14px rgba(32, 80, 138, 0.13)',
    color: '#222',
    cursor: 'pointer',
    transition: 'background 0.2s',
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const matchedUser = users?.find(
      (user) => user.username === username && user.password === password
    );

    if (matchedUser) {
      setError('');
      navigate('/alumni-main', {
        state: {
          name: matchedUser.name,
          username: matchedUser.username,
        },
      });
    } else {
      setError('Username or password does not match!');
    }
  };

  return (
    <div style={style}>
      <form style={boxStyle} onSubmit={handleSubmit}>
        <div style={headingStyle}>Login</div>

        <input
          type="text"
          placeholder="Username"
          style={inputStyle}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          autoComplete="username"
        />

        <input
          type="password"
          placeholder="Password"
          style={inputStyle}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />

        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundPosition = 'right center';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(208, 231, 255, 0.9)';
            e.currentTarget.style.transform = 'scale(1.12)';
            e.currentTarget.style.borderColor = '#fff';
            e.currentTarget.style.color = '#000';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundPosition = 'left center';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.borderColor = 'transparent';
            e.currentTarget.style.color = '#222';
          }}
        >
          Login
        </button>

        {error && (
          <p style={{ color: 'red', marginTop: '10px', fontWeight: '600' }}>{error}</p>
        )}
      </form>
    </div>
  );
}
