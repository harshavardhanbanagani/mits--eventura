import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="mb-8 text-xl">Page not found</p>
      <Link to="/" className="text-blue-600 hover:underline">
        Go to Home
      </Link>
    </div>
  )
}

export default NotFoundPage