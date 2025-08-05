import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import usePosts from '../../hooks/usePosts'
import LoadingSpinner from '../shared/LoadingSpinner'
import { formatDate } from '../../utils/dateUtils'

function PostsList() {
  const { posts, loading, fetchPosts, deletePost } = usePosts()

  useEffect(() => {
    fetchPosts()
  }, [])

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      await deletePost(id)
    }
  }

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Posts</h2>
        <Link to="/admin/posts/new" className="btn btn-primary">
          Create New Post
        </Link>
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b dark:border-gray-600">
                  <td className="px-4 py-2">{post.title}</td>
                  <td className="px-4 py-2">{post.category}</td>
                  <td className="px-4 py-2">{formatDate(post.createdAt)}</td>
                  <td className="px-4 py-2">
                    <Link
                      to={`/admin/posts/edit/${post.id}`}
                      className="text-blue-500 hover:underline mr-4"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default PostsList