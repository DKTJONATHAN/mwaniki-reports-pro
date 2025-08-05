import { useEffect, useState } from 'react'
import axios from 'axios'

function Dashboard() {
  const [stats, setStats] = useState({ posts: 0, views: 0, comments: 0 })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('/api/admin/dashboard-stats')
        setStats(response.data)
      } catch (error) {
        console.error('Error fetching dashboard stats:', error)
      }
    }
    fetchStats()
  }, [])

  return (
    <div className="card">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-accent text-white p-4">
          <h3 className="text-lg font-semibold">Total Posts</h3>
          <p className="text-3xl mt-2">{stats.posts}</p>
        </div>
        <div className="card bg-blue-500 text-white p-4">
          <h3 className="text-lg font-semibold">Total Views</h3>
          <p className="text-3xl mt-2">{stats.views}</p>
        </div>
        <div className="card bg-green-500 text-white p-4">
          <h3 className="text-lg font-semibold">Total Comments</h3>
          <p className="text-3xl mt-2">{stats.comments}</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard