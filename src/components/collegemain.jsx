import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Collegemain() {
  const location = useLocation();
  const navigate = useNavigate();

  const { username, users } = location.state || {};

  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', description: '', date: '' });
  const [requests, setRequests] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent(prev => ({ ...prev, [name]: value }));
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (!newEvent.title || !newEvent.date) {
      alert('Please fill in Title and Date.');
      return;
    }
    setEvents(prev => [...prev, { ...newEvent, id: prev.length + 1 }]);
    setNewEvent({ title: '', description: '', date: '' });
  };

  const handleRequestParticipation = (eventId) => {
    if (requests.find(r => r.eventId === eventId && r.username === username)) {
      alert('You have already requested to participate in this event.');
      return;
    }
    setRequests(prev => [...prev, { eventId, username }]);
    alert('Participation request sent!');
  };

  return (
    <div style={{ maxWidth: 700, margin: '20px auto', padding: 20, fontFamily: 'Arial, sans-serif' }}>
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

      <h2>Post a New Event</h2>
      <form onSubmit={handleAddEvent} style={{ marginBottom: 30 }}>
        <input
          type="text"
          name="title"
          value={newEvent.title}
          onChange={handleInputChange}
          placeholder="Event Title"
          style={{ width: '100%', padding: 8, marginBottom: 10, borderRadius: 6, border: '1px solid #ccc' }}
          required
        />
        <textarea
          name="description"
          value={newEvent.description}
          onChange={handleInputChange}
          placeholder="Description (optional)"
          rows={3}
          style={{ width: '100%', padding: 8, marginBottom: 10, borderRadius: 6, border: '1px solid #ccc', resize: 'vertical' }}
        />
        <input
          type="date"
          name="date"
          value={newEvent.date}
          onChange={handleInputChange}
          style={{ padding: 8, borderRadius: 6, border: '1px solid #ccc', marginBottom: 10 }}
          required
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            fontWeight: '600',
            borderRadius: 6,
            border: 'none',
            backgroundColor: '#08AEEA',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Add Event
        </button>
      </form>

      <h2>Upcoming Events</h2>
      {events.length === 0 ? (
        <p>No events posted yet.</p>
      ) : (
        events.map(event => (
          <div key={event.id} style={{ border: '1px solid #ddd', borderRadius: 6, padding: 15, marginBottom: 20 }}>
            <h3 style={{ margin: '0 0 5px 0' }}>{event.title}</h3>
            <p>{event.description || 'No description provided'}</p>
            <p><strong>Date:</strong> {event.date}</p>
            <button
              onClick={() => handleRequestParticipation(event.id)}
              disabled={!!requests.find(r => r.eventId === event.id && r.username === username)}
              style={{
                padding: '8px 16px',
                borderRadius: 6,
                border: 'none',
                backgroundColor: requests.find(r => r.eventId === event.id && r.username === username) ? '#ccc' : '#28a745',
                color: 'white',
                cursor: requests.find(r => r.eventId === event.id && r.username === username) ? 'default' : 'pointer',
              }}
            >
              {requests.find(r => r.eventId === event.id && r.username === username) ? 'Request Sent' : 'Request Participation'}
            </button>
          </div>
        ))
      )}
    </div>
  );
}
