import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center px-6">
        <h1 className="text-8xl font-serif font-bold text-navy-900 mb-4">404</h1>
        <p className="text-2xl font-serif text-gray-700 mb-2">Page Not Found</p>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved. Please check the URL or navigate back to our homepage.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-500 text-navy-900 px-8 py-4 rounded-sm font-bold text-lg transition-all"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
