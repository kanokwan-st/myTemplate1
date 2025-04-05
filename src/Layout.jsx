import { Outlet, Link } from 'react-router-dom';

import React from 'react'

export default function Layout() {
  return (
    <div className='min-h-screen bg-gray-300'>
      <nav className='flex gap-4 bg-amber-100'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Outlet/>
    </div>
  )
}
