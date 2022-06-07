import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='p-1 mb-5 nav text-light justify-content-around bg-dark'>
            <h1>SPA APP</h1>
            <ul className="nav">
                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>
        </nav>
    )
}
