import { Component } from 'react'

class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container py-8 text-center">
          <h2 className="text-2xl font-bold text-red-600">Something went wrong.</h2>
          <p className="mt-4">Please try refreshing the page or contact support.</p>
          <a href="mailto:info@jonathanmwaniki.co.ke" className="text-accent hover:underline">
            Contact Support
          </a>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary