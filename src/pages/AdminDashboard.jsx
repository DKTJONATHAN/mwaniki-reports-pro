import { Routes, Route, Navigate } from 'react-router-dom'
import AdminLayout from '../components/admin/AdminLayout'
import Login from '../components/admin/Login'
import Dashboard from '../components/admin/Dashboard'
import PostsList from '../components/admin/PostsList'
import PostEditor from '../components/admin/PostEditor'
import useAuth from '../hooks/useAuth'
import ErrorBoundary from '../components/shared/ErrorBoundary'

function AdminDashboard() {
  const { isAuthenticated } = useAuth()

  return (
    <ErrorBoundary>
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/admin" replace /> : <Login />}
        />
        <Route
          element={isAuthenticated ? <AdminLayout /> : <Navigate to="/admin/login" replace />}
        >
          <Route index element={<Dashboard />} />
          <Route path="posts" element={<PostsList />} />
          <Route path="posts/new" element={<PostEditor />} />
          <Route path="posts/edit/:id" element={<PostEditor />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  )
}

export default AdminDashboard