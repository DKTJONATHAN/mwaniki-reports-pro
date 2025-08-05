import { create } from 'zustand'

const usePostsStore = create((set) => ({
  posts: [],
  post: null,
  loading: false,
  setPosts: (posts) => set({ posts }),
  setPost: (post) => set({ post }),
  setLoading: (loading) => set({ loading }),
}))

export default usePostsStore