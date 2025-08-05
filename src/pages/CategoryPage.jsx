import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/public/Header'
import Footer from '../components/public/Footer'
import PostCard from '../components/public/PostCard'
import LoadingSpinner from '../components/shared/LoadingSpinner'
import ErrorBoundary from '../components/shared/ErrorBoundary'
import SEOHead from '../components/shared/SEOHead'
import usePosts from '../hooks/usePosts'

function CategoryPage() {
  const { category } = useParams()
  const { posts, loading, fetchPostsByCategory } = usePosts()

  useEffect(() => {
    fetchPostsByCategory(category)
  }, [category])

  return (
    <ErrorBoundary>
      <SEOHead
        title={`${category.charAt(0).toUpperCase() + category.slice(1)} | Mwaniki's Report`}
        description={`Latest ${category} from Mwaniki's Report`}
        keywords={`${category}, news, gossip, Jonathan Mwaniki`}
      />
      <Header />
      <main className="container py-8">
        <h1 className="text-3xl font-bold mb-6 capitalize">{category}</h1>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.length > 0 ? (
              posts.map((post) => <PostCard key={post.id} post={post} />)
            ) : (
              <p>No posts found in this category.</p>
            )}
          </div>
        )}
      </main>
      <Footer />
    </ErrorBoundary>
  )
}

export default CategoryPage