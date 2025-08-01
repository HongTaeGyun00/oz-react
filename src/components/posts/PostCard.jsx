import { Link } from 'react-router'

function PostCard({ post, searchTerm, highlightEnabled }) {
  // 텍스트에서 검색어를 하이라이팅하는 함수
  const highlightText = (text, term) => {
    if (!term || !highlightEnabled) {
      return text
    }

    const regex = new RegExp(`(${term})`, 'gi')
    const parts = text.split(regex)
    
    return parts.map((part, index) => {
      if (part.toLowerCase() === term.toLowerCase()) {
        return `<mark class="highlight">${part}</mark>`
      }
      return part
    }).join('')
  }

  return (
    <Link to={`/posts/${post.id}`}>
      <article className="post-card">
        <div className="post-header">
          <span className="post-id">#{post.id}</span>
          <span className="user-id">작성자 {post.userId}</span>
        </div>
        <h2 
          className="post-title"
          dangerouslySetInnerHTML={{ 
            __html: highlightText(post.title, searchTerm) 
          }}
        />
        <p 
          className="post-body"
          dangerouslySetInnerHTML={{ 
            __html: highlightText(post.body, searchTerm) 
          }}
        />
      </article>
    </Link>
  )
}

export default PostCard 