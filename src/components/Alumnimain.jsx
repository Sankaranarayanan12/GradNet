import React from 'react'
import { useLocation } from "react-router-dom";
export default function Alumnimain() {
   const location = useLocation();
  const { username, password } = location.state || {};
  return (
    <div>Welcome {username}</div>
  )
}
