import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Events() {
  const location = useLocation();
  const navigate = useNavigate();

  const { username, users } = location.state || {};

  // Example static events data; in a real app, replace with dynamic or fetched data
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

  const events = [
    { id: 1, title: "Alumni Meeting", date: today, time: "10:00 AM", location: "Auditorium" },
    { id: 2, title: "Career Workshop", date: today, time: "2:00 PM", location: "Conference Room" },
    { id: 3, title: "Networking Dinner", date: "2025-12-25", time: "7:00 PM", location: "Banquet Hall" },
  ];

  // Filter events for today
  const todaysEvents = events.filter(event => event.date === today);

  return (
    <div style={{ maxWidth: 600, margin: '20px auto', padding: 20, fontFamily: 'Arial, sans-serif' }}>
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

      <h2>Events Scheduled for Today ({today})</h2>

      {todaysEvents.length === 0 ? (
        <p>No events scheduled for today.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todaysEvents.map(event => (
            <li key={event.id} style={{ marginBottom: 15, border: '1px solid #ddd', borderRadius: 6, padding: 10 }}>
              <h3 style={{ margin: '0 0 5px 0' }}>{event.title}</h3>
              <div><strong>Time:</strong> {event.time}</div>
              <div><strong>Location:</strong> {event.location}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
