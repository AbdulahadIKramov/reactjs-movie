import React from 'react'

function Header() {
  return (
    <nav>
    <div className="nav-wrapper blue header_nav">
      <a href="#" className="brand-logo">React</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="#">movie</a></li>
        <li><a href="#">Components</a></li>
        <li><a href="#">JavaScript</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Header