import api from './api'

export const login = async (email, password) => {
  const response = await api.post('/auth/login', { email, password })
  return response.data
}

export const verifyToken = async (token) => {
  const response = await api.get('/auth/verify', {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}