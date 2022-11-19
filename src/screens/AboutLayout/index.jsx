import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AboutLayout = () => {
  return (
    <div>
      {/* <h1>About</h1>  */}
      <Link to='/about/1'>Service 1</Link>
      <br/>
      <Link to='/about/2'>Service 2</Link>
      <br/>
      <Link to='/about/new'>Service new</Link>  
      <Outlet/>
    </div>
  )
}

export default AboutLayout
