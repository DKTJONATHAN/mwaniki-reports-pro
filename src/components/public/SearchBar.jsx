import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`)
      setSearchTerm('')
    }
  }

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search news..."
        className="px-3 py-2 rounded-l-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <button type="submit" className="px-3 py-2 bg-accent text-white rounded-r-md hover:bg-orange-500">
        <FaSearch />
      </button>
    </form>
  )
}

export default SearchBar