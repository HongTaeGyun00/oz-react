import PostCard from './PostCard'
import SkeletonCard from './SkeletonCard'
import ErrorMessage from './ErrorMessage'

function PostList({ posts, loading, error, searchTerm, highlightEnabled }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }, (_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    )
  }

  if (error) {
    return <ErrorMessage message={error} />
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map(post => (
        <PostCard 
          key={post.id} 
          post={post} 
          searchTerm={searchTerm}
          highlightEnabled={highlightEnabled}
        />
      ))}
    </div>
  )
}

export default PostList 