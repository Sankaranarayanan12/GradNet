import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Studentmain() {
  const location = useLocation();
  const navigate = useNavigate();

  const { username, users } = location.state || {};

  // Example static internships/mentorships data
  const opportunities = [
    { id: 1, title: "Software Engineering Internship", organization: "TechCorp", date: "2025-09-25" },
    { id: 2, title: "Marketing Mentorship Program", organization: "MarketGurus", date: "2025-10-05" },
    { id: 3, title: "Data Science Internship", organization: "DataWorks", date: "2025-10-15" },
  ];

  return (
    <div style={{ maxWidth: 700, margin: '20px auto', padding: 20, fontFamily: 'Arial, sans-serif' }}>
      
      <h1>Welcome, {username}</h1>

      <section style={{ marginBottom: 40 }}>
        <h2>Upcoming Internship / Mentorship Opportunities</h2>
        {opportunities.length === 0 ? (
          <p>No upcoming opportunities available.</p>
        ) : (
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            {opportunities.map(({ id, title, organization, date }) => (
              <li key={id} style={{ marginBottom: 15, border: '1px solid #ddd', borderRadius: 6, padding: 15 }}>
                <h3 style={{ margin: '0 0 5px 0' }}>{title}</h3>
                <p><strong>Organization:</strong> {organization}</p>
                <p><strong>Date:</strong> {date}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2>Connect with Alumni</h2>
        <button
          onClick={() => navigate('/alumni-community', { state: { currentUser: username, users } })}
          style={{
            padding: '12px 24px',
            fontSize: '1.1rem',
            fontWeight: '600',
            borderRadius: '10px',
            cursor: 'pointer',
            color: '#222',
            backgroundColor: '#a1c9ff',
            border: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#c4e0ff'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#a1c9ff'}
        >
          Chat with Alumni
        </button>
      </section>
    </div>
  );
}

