import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Fund() {
  const location = useLocation();
  const navigate = useNavigate();

  const { username, users } = location.state || {};

  // Example static information about fundraising; customize as needed
  const fundraisingDetails = [
    {
      title: "Scholarship Fund",
      description:
        "Help provide scholarships to deserving students to support their education and career aspirations.",
      goalAmount: "$50,000",
      currentAmount: "$23,450",
    },
    {
      title: "Campus Development",
      description:
        "Support upgrades and improvements to our campus facilities including labs, libraries, and sports grounds.",
      goalAmount: "$150,000",
      currentAmount: "$85,300",
    },
    {
      title: "Community Outreach",
      description:
        "Fund programs that help strengthen the local community through education, health, and social initiatives.",
      goalAmount: "$30,000",
      currentAmount: "$12,750",
    },
  ];

  return (
    <div style={{ maxWidth: 700, margin: "20px auto", padding: 20, fontFamily: "Arial, sans-serif" }}>
      <button
        onClick={() => navigate("/alumni-main", { state: { username, users } })}
        style={{
          marginBottom: 20,
          padding: "6px 12px",
          borderRadius: 6,
          border: "none",
          backgroundColor: "#08AEEA",
          color: "white",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <h2>Fund Raising Information</h2>

      {fundraisingDetails.map(({ title, description, goalAmount, currentAmount }, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            borderRadius: 6,
            padding: 15,
            marginBottom: 20,
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginTop: 0 }}>{title}</h3>
          <p>{description}</p>
          <p>
            <strong>Goal:</strong> {goalAmount}
          </p>
          <p>
            <strong>Raised so far:</strong> {currentAmount}
          </p>
        </div>
      ))}
    </div>
  );
}
