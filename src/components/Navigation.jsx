import React from 'react'

function Navigation() {
  return (
    <nav>
        <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li href="#"> Menu</li>
          <li href="#"> Location</li>
          <li href="#"> About</li>
          <li href="#"> Conatct</li>
        </ul>
        <button>LOGIN</button>
      </nav>
  )
}

export default Navigation