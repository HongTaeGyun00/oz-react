import PostCard from './PostCard'
import SkeletonCard from './SkeletonCard'
import ErrorMessage from './ErrorMessage'

function PostList({ posts, loading, error, searchTerm, highlightEnabled }) {
  if (loading) {
    return (
      <div className="posts-grid">
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
    <div className="posts-grid">
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