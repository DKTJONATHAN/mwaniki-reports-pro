import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useLocalStorage from './useLocalStorage'
import axios from 'axios'

function useAuth() {
  const [token, setToken] = useLocalStorage('authToken', null)
  const [user, setUser] = useLocalStorage('user', null)
  const navigate = useNavigate()

  const login = async (email, password) => {
    try {
      const response = await axios.post('/api/auth/login', { email, password })
      setToken(response.data.token)
      setUser(response.data.user)
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
      return response.data
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Login failed')
    }
  }

  const logout = () => {
    setToken(null)
    setUser(null)
    delete axios.defaults.headers.common['Authorization']
    navigate('/admin/login')
  }

  const verifyToken = async () => {
    if (!token) return false
    try {
      const response = await axios.get('/api/auth/verify', {
        headers: { Authorization: `Bearer ${token}` },
      })
      return response.data.valid
    } catch (error) {
      logout()
      return false
    }
  }

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
  }, [token])

  return {
    isAuthenticated: !!token && !!user,
    user,
    login,
    logout,
    verifyToken,
  }
}

export default useAuth