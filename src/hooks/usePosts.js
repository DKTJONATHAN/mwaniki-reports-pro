import { useState } from 'react'
import axios from 'axios'

function usePosts() {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchPosts = async () => {
    setLoading(true)
    try {
      const response = await axios.get('/api/posts/fetch-posts')
      setPosts(response.data)
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchPostById = async (id) => {
    setLoading(true)
    try {
      const response = await axios.get(`/api/posts/fetch-posts?id=${id}`)
      setPost(response.data)
    } catch (error) {
      console.error('Error fetching post:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchPostsByCategory = async (category) => {
    setLoading(true)
    try {
      const response = await axios.get(`/api/posts/fetch-posts?category=${category}`)
      setPosts(response.data)
    } catch (error) {
      console.error('Error fetching posts by category:', error)
    } finally {
      setLoading(false)
    }
  }

  const savePost = async (formData) => {
    setLoading(true)
    try {
      const response = await axios.post('/api/posts/save-post', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      setPosts((prev) => [...prev, response.data])
    } catch (error) {
      console.error('Error saving post:', error)
    } finally {
      setLoading(false)
    }
  }

  const deletePost = async (id) => {
    setLoading(true)
    try {
      await axios.delete(`/api/posts/delete-post?id=${id}`)
      setPosts((prev) => prev.filter((post) => post.id !== id))
    } catch (error) {
      console.error('Error deleting post:', error)
    } finally {
      setLoading(false)
    }
  }

  return {
    posts,
    post,
    loading,
    fetchPosts,
    fetchPostById,
    fetchPostsByCategory,
    savePost,
    deletePost,
  }
}

export default usePosts