import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-off-white">
      <div className="text-center">
        <h1 className="heading-1 mb-4">Page Not Found</h1>
        <p className="body-text mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  )
} 