import { useEffect } from 'react'
import Header from '../components/public/Header'
import Footer from '../components/public/Footer'
import FeaturedPost from '../components/public/FeaturedPost'
import PostCard from '../components/public/PostCard'
import LoadingSpinner from '../components/shared/LoadingSpinner'
import ErrorBoundary from '../components/shared/ErrorBoundary'
import SEOHead from '../components/shared/SEOHead'
import usePosts from '../hooks/usePosts'

function HomePage() {
  const { posts, loading, fetchPosts } = usePosts()

  useEffect(() => {
    fetchPosts()
  }, [])

  const featuredPost = posts[0]
  const recentPosts = posts.slice(1, 7)

  return (
    <ErrorBoundary>
      <SEOHead
        title="Home"
        description="Latest news and gossip from Mwaniki's Report"
        keywords="news, gossip, Jonathan Mwaniki"
      />
      <Header />
      <main className="container py-8">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            {featuredPost && <FeaturedPost post={featuredPost} />}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </>
        )}
      </main>
      <Footer />
    </ErrorBoundary>
  )
}

export default HomePage