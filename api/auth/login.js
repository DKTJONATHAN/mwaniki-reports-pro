const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { email, password } = req.body

  // Replace with your actual admin credentials check
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'info@jonathanmwaniki.co.ke'
  const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH // Set this in Vercel environment variables
  const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key' // Set this in Vercel environment variables

  if (email !== ADMIN_EMAIL) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  const isPasswordValid = await bcrypt.compare(password, ADMIN_PASSWORD_HASH)
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }

  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' })

  res.status(200).json({
    token,
    user: { email, name: 'Jonathan Mwaniki' },
  })
}