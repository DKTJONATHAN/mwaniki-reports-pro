import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/public/Header'
import Footer from '../components/public/Footer'
import LoadingSpinner from '../components/shared/LoadingSpinner'
import ErrorBoundary from '../components/shared/ErrorBoundary'
import SEOHead from '../components/shared/SEOHead'
import usePosts from '../hooks/usePosts'
import { formatDate } from '../utils/dateUtils'

function ArticlePage() {
  const { id } = useParams()
  const { post, loading, fetchPostById } = usePosts()

  useEffect(() => {
    fetchPostById(id)
  }, [id])

  if (loading) return <LoadingSpinner />

  if (!post) return <div className="container py-8 text-center">Post not found</div>

  return (
    <ErrorBoundary>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        keywords={`${post.category}, news, gossip, Jonathan Mwaniki`}
        image={post.image}
      />
      <Header />
      <main className="container py-8">
        <article className="card">
          <img
            src={post.image || '/images/placeholder.jpg'}
            alt={post.title}
            className="w-full h-96 object-cover rounded-t-lg"
          />
          <div className="p-6">
            <span className="text-sm text-accent uppercase">{post.category}</span>
            <h1 className="text-3xl font-bold mt-2">{post.title}</h1>
            <p className="text-sm text-gray-500 mt-2">{formatDate(post.createdAt)}</p>
            <div
              className="prose dark:prose-invert mt-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </ErrorBoundary>
  )
}

export default ArticlePage