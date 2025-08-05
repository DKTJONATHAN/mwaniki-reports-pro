import { useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes, FaTachometerAlt, FaFileAlt, FaSignOutAlt } from 'react-icons/fa'
import useAuth from '../../hooks/useAuth'

function AdminLayout() {
  const [isOpen, setIsOpen] = useState(false)
  const { logout } = useAuth()
  const navigate = useNavigate()

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-primary">
      <header className="bg-primary text-white sticky top-0 z-50">
        <div className="container py-4 flex justify-between items-center">
          <Link to="/admin" className="text-2xl font-bold">
            Admin Dashboard
          </Link>
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          <nav className="hidden md:flex space-x-6 items-center">
            <NavLink to="/admin" className="hover:text-accent">Dashboard</NavLink>
            <NavLink to="/admin/posts" className="hover:text-accent">Posts</NavLink>
            <button onClick={handleLogout} className="hover:text-accent flex items-center">
              <FaSignOutAlt className="mr-1" /> Logout
            </button>
          </nav>
        </div>
        {isOpen && (
          <div className="md:hidden container pb-4">
            <nav className="flex flex-col space-y-4">
              <NavLink to="/admin" className="hover:text-accent" onClick={toggleMenu}>
                <FaT nicheometerAlt className="inline mr-2" /> Dashboard
              </NavLink>
              <NavLink to="/admin/posts" className="hover:text-accent" onClick={toggleMenu}>
                <FaFileAlt className="inline mr-2" /> Posts
              </NavLink>
              <button onClick={handleLogout} className="hover:text-accent flex items-center">
                <FaSignOutAlt className="mr-2" /> Logout
              </button>
            </nav>
          </div>
        )}
      </header>
      <main className="container py-8">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout