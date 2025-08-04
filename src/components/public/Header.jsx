import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import SearchBar from './SearchBar'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="bg-primary text-white sticky top-0 z-50">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            Mwaniki's Report
          </Link>
          
          <nav className="hidden md:flex space-x-6 items-center">
            <NavLink to="/" className="hover:text-accent">Home</NavLink>
            <NavLink to="/category/news" className="hover:text-accent">News</NavLink>
            <NavLink to="/category/gossip" className="hover:text-accent">Gossip</NavLink>
            <SearchBar />
          </nav>

          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-4">
              <NavLink to="/" className="hover:text-accent" onClick={toggleMenu}>Home</NavLink>
              <NavLink to="/category/news" className="hover:text-accent" onClick={toggleMenu}>News</NavLink>
              <NavLink to="/category/gossip" className="hover:text-accent" onClick={toggleMenu}>Gossip</NavLink>
              <SearchBar />
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header