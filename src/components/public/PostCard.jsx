import { Link } from 'react-router-dom'
import { formatDate } from '../../utils/dateUtils'

function PostCard({ post }) {
  return (
    <div className="card">
      <Link to={`/article/${post.id}`}>
        <img
          src={post.image || '/images/placeholder.jpg'}
          alt={post.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <span className="text-sm text-accent uppercase">{post.category}</span>
          <h3 className="text-xl font-semibold mt-2">{post.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">{post.excerpt}</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-sm text-gray-500">{formatDate(post.createdAt)}</span>
            <span className="text-sm text-accent">Read More</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PostCard