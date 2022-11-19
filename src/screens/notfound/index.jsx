import React from 'react'
import { useNavigate } from 'react-router-dom'
const Notfond = () => {
const navigate = useNavigate()

    setTimeout(() => {
        navigate("/")
    }, 2000);
  return (
    <div>
      <h1>Not Founund 404</h1>

    </div>
  )
}

export default Notfond
