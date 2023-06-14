import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contatos</Link>
    </nav>
  )
}

export default Navbar