const jwt = require('jsonwebtoken')

export default async function handler(req, res) {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ valid: false, message: 'No token provided' })
  }

  const token = authHeader.split(' ')[1]
  const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    res.status(200).json({ valid: true, user: decoded })
  } catch (error) {
    res.status(401).json({ valid: false, message: 'Invalid token' })
  }
}