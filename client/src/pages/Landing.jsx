import React from 'react'
import { Link } from 'react-router-dom'
export default function Landing() {
  return (
    <div>
      <h2> welcome to NoteGpt
          </h2>
          <Link to="/Login" >Login</Link>
          <Link to="/Register" >Register</Link>
    </div>
  )
}
