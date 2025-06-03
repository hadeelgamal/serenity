export default function Loading() {
  return (
    <div className="fixed inset-0 bg-off-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-secondary font-medium">Loading...</p>
      </div>
    </div>
  )
} 