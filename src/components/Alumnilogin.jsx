import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Alumnilogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    contactNumber: '',
    academicDetails: '',
    careerDetails: '',
  });

  const styles = {
    page: {
      minHeight: '100vh',
      backgroundImage: "linear-gradient(90deg, #08AEEA 0%, #2AF598 100%)",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 30,
      boxSizing: 'border-box',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      margin: 0,
    },
    heading: { marginBottom: 20, textAlign: 'center', color: '#fff', fontSize: '2rem', fontWeight: 'bold' },
    form: {
      width: '100%',
      maxWidth: 400,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'rgba(255,255,255,0.9)',
      padding: 20,
      borderRadius: 10,
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
    label: { marginBottom: 5, fontWeight: 600, color: '#333' },
    input: {
      width: '100%',
      padding: 8,
      marginBottom: 15,
      borderRadius: 5,
      border: '1px solid #ccc',
      boxSizing: 'border-box',
      resize: 'vertical',
      fontFamily: 'inherit',
      fontSize: '1rem',
    },
    btn: {
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
      alignSelf: 'center',
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem('alumniUsers')) || [];

    if (existingUsers.some(u => u.username === formData.username)) {
      alert('Username already exists. Please choose another one.');
      return;
    }

    const newUser = { ...formData };
    existingUsers.push(newUser);
    localStorage.setItem('alumniUsers', JSON.stringify(existingUsers));

    if (existingUsers.length >= 2) {
      navigate('/alumni-login2', {
        state: {
          currentUser: formData.username,
          users: existingUsers,
        },
      });
    } else {
      alert('Signup successful! Waiting for another user to join the chat.');
      setFormData({
        name: '',
        username: '',
        password: '',
        contactNumber: '',
        academicDetails: '',
        careerDetails: '',
      });
    }
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>Sign Up</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Name</label>
        <input name="name" type="text" value={formData.name} onChange={handleChange} required style={styles.input} />

        <label style={styles.label}>Username</label>
        <input name="username" type="text" value={formData.username} onChange={handleChange} required style={styles.input} />

        <label style={styles.label}>Password</label>
        <input name="password" type="password" value={formData.password} onChange={handleChange} required style={styles.input} />

        <label style={styles.label}>Contact Number</label>
        <input name="contactNumber" type="tel" value={formData.contactNumber} onChange={handleChange} required pattern="[0-9]{10,15}" placeholder="Digits only" style={styles.input} />

        <label style={styles.label}>Academic Details</label>
        <textarea name="academicDetails" value={formData.academicDetails} onChange={handleChange} rows={3} style={styles.input} />

        <label style={styles.label}>Career Details</label>
        <textarea name="careerDetails" value={formData.careerDetails} onChange={handleChange} rows={3} style={styles.input} />

        <button
          type="submit"
          style={styles.btn}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundPosition = 'right center';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(208, 231, 255, 0.9)';
            e.currentTarget.style.transform = 'scale(1.12)';
            e.currentTarget.style.borderColor = '#fff';
            e.currentTarget.style.color = '#000';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundPosition = 'left center';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.borderColor = 'transparent';
            e.currentTarget.style.color = '#222';
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
