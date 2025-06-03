'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-off-white">
      <div className="text-center">
        <h1 className="heading-1 mb-4">Something went wrong!</h1>
        <p className="body-text mb-8">
          We apologize for the inconvenience. Please try again later.
        </p>
        <button
          onClick={reset}
          className="btn-primary"
        >
          Try again
        </button>
      </div>
    </div>
  )
} 