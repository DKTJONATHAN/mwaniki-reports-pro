import { Link } from 'react-router-dom'
import { formatDate } from '../../utils/dateUtils'

function FeaturedPost({ post }) {
  return (
    <div className="relative bg-primary text-white rounded-lg overflow-hidden">
      <img
        src={post.image || '/images/placeholder.jpg'}
        alt={post.title}
        className="w-full h-96 object-cover opacity-50"
      />
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <span className="text-sm text-accent uppercase">{post.category}</span>
        <Link to={`/article/${post.id}`}>
          <h2 className="text-3xl font-bold mt-2 hover:text-accent">{post.title}</h2>
        </Link>
        <p className="mt-2 line-clamp-2">{post.excerpt}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm">{formatDate(post.createdAt)}</span>
          <Link to={`/article/${post.id}`} className="btn btn-primary">
            Read Full Story
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPost