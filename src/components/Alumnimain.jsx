import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Alumnimain() {
  const navigate = useNavigate();
  const location = useLocation();
  const { username, name } = location.state || {};

  const containerStyle = {
    height: '100vh',
    padding: 20,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    boxSizing: 'border-box',
    position: 'relative',
  };

  const accountContainerStyle = {
    position: 'absolute',
    top: 20,
    left: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#444',
  };

  const iconContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: '50%',
    backgroundColor: '#e0f0ff',
    border: '2px solid #a1c9ff',
    marginBottom: 8,
    fontSize: 48,
    color: '#444',
  };

  const usernameStyle = {
    fontSize: 18,
    fontWeight: 'bold',
  };

  const welcomeStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 36,
    color: '#222',
    marginTop: 10,
    marginBottom: 60,
  };

  const buttonsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 220px)',
    gap: '20px 40px',
    justifyContent: 'center',
    marginTop: 80,
  };

  const btnStyle = {
    width: 220,
    padding: '12px 24px',
    fontSize: '1.1rem',
    fontWeight: 600,
    border: '2px solid transparent',
    borderRadius: 10,
    cursor: 'pointer',
    color: '#222',
    backgroundSize: '200% 200%',
    backgroundPosition: 'left center',
    backgroundImage: 'linear-gradient(45deg, #a1c9ff, #d0e7ff)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'background-position 0.5s ease, box-shadow 0.3s ease, transform 0.2s ease, border-color 0.3s ease',
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundPosition = 'right center';
    e.currentTarget.style.boxShadow = '0 10px 40px rgba(208, 231, 255, 0.9)';
    e.currentTarget.style.transform = 'scale(1.12)';
    e.currentTarget.style.borderColor = '#fff';
    e.currentTarget.style.color = '#000';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundPosition = 'left center';
    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    e.currentTarget.style.transform = 'none';
    e.currentTarget.style.borderColor = 'transparent';
    e.currentTarget.style.color = '#222';
  };

  return (
    <div style={containerStyle}>
      <div style={accountContainerStyle}>
        <div style={iconContainerStyle} role="img" aria-label="account icon">
          👤
        </div>
        <div style={usernameStyle}>User name: {username}</div>
      </div>

      <div style={welcomeStyle}>Welcome, {name}</div>

      <div style={buttonsContainerStyle}>
        <button
          type="button"
          style={btnStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => navigate('/alumni-community', { state: { currentUser: username, users: JSON.parse(localStorage.getItem('alumniUsers')) } })}
        >
          Community Channel
        </button>

        <button type="button"  onClick={()=>{navigate('/alumni-post')}}style={btnStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Post
        </button>

        <button type="button" onClick={()=>{navigate('/alumni-events')}}style={btnStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Events
        </button>

        <button type="button"  onClick={()=>{navigate('/alumni-fund')}}style={btnStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Fund Raising Info
        </button>
      </div>
    </div>
  );
}
