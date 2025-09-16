import React from 'react'
import titleImg from '../assets/titleimg.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Welcome() {
    const navigate=useNavigate();
    const goToAlumni=()=>navigate('/alumni-login')
     const goToStudent=()=>navigate('/student-login')
      const goToCollege=()=>navigate('/college-login')
    const [showChat, setShowChat] = useState(false);
     const toggleMessage = () => {
    setShowChat((prev) => !prev);
  };

  return (
    <div>
   <div className="CenterTop">
  <div className="TitleRow">
    <img src={titleImg} alt="GradNet" className="Icon" />
    <h1 className="Title">Welcome to GradNet!</h1>
  </div>
</div>


    <div style={{ position: 'relative', display: 'inline-block' }}>
      <i
        className="fa-solid fa-circle-info"
        onClick={toggleMessage}
        style={{ cursor: 'pointer', fontSize: '1.8rem', color: '#334155' }}
      ></i>

      {showChat && (
        <div className="chatbox">
          GradNet is a platform that connects alumni, supports current students through internships and guidance, and enables colleges to engage alumni in events.
        </div>
      )}
    </div>

     
        
      
    <div className="button-column">
      <button onClick={goToAlumni} className="btn alumni">Alumni</button>
      <button onClick={goToStudent} className="btn student">Student</button>
      <button onClick={goToCollege}  className="btn admin">College Administrator</button>
    </div>

    
    </div>
  )
}
