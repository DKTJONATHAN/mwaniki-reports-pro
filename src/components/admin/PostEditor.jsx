import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import '../../styles/quill-custom.css'
import usePosts from '../../hooks/usePosts'

function PostEditor() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { post, fetchPostById, savePost } = usePosts()
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [category, setCategory] = useState('news')
  const [image, setImage] = useState(null)
  const [content, setContent] = useState('')
  let quill = null

  useEffect(() => {
    if (id) {
      fetchPostById(id)
    }
  }, [id])

  useEffect(() => {
    if (id && post) {
      setTitle(post.title)
      setExcerpt(post.excerpt)
      setCategory(post.category)
      setContent(post.content)
    }
  }, [post])

  useEffect(() => {
    quill = new Quill('#editor', {
      theme: 'snow',
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ['bold', 'italic', 'underline'],
          ['link', 'image'],
          [{ list: 'ordered' }, { list: 'bullet' }],
        ],
      },
    })

    quill.on('text-change', () => {
      setContent(quill.root.innerHTML)
    })

    if (content) {
      quill.root.innerHTML = content
    }

    return () => {
      quill = null
    }
  }, [content])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('title', title)
    formData.append('excerpt', excerpt)
    formData.append('category', category)
    formData.append('content', content)
    if (image) formData.append('image', image)
    if (id) formData.append('id', id)

    await savePost(formData)
    navigate('/admin/posts')
  }

  return (
    <div className="card">
      <h2 className="text-2xl font-bold mb-6">{id ? 'Edit Post' : 'Create New Post'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 border-none focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="excerpt" className="block text-sm font-medium mb-1">Excerpt</label>
          <textarea
            id="excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="w-full px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 border-none focus:outline-none focus:ring-2 focus:ring-accent"
            rows="3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium mb-1">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 border-none focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="news">News</option>
            <option value="gossip">Gossip</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium mb-1">Featured Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 border-none focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Content</label>
          <div id="editor" className="bg-white dark:bg-secondary"></div>
        </div>
        <button type="submit" className="btn btn-primary">
          {id ? 'Update Post' : 'Publish Post'}
        </button>
      </form>
    </div>
  )
}

export default PostEditor