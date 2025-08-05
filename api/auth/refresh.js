const jwt = require('jsonwebtoken')

export default async function handler(req, res) {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided' })
  }

  const token = authHeader.split(' ')[1]
  const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    const newToken = jwt.sign({ email: decoded.email }, JWT_SECRET, { expiresIn: '1h' })
    res.status(200).json({ token: newToken })
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' })
  }
}