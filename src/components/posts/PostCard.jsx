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
        return `<mark class="bg-yellow-200 px-1 rounded">${part}</mark>`
      }
      return part
    }).join('')
  }

  return (
    <Link to={`/posts/${post.id}`} className="block">
      <article className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 h-full border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
            #{post.id}
          </span>
          <span className="text-sm text-gray-500">
            작성자 {post.userId}
          </span>
        </div>
        <h2 
          className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2"
          dangerouslySetInnerHTML={{ 
            __html: highlightText(post.title, searchTerm) 
          }}
        />
        <p 
          className="text-gray-600 text-sm leading-relaxed line-clamp-3"
          dangerouslySetInnerHTML={{ 
            __html: highlightText(post.body, searchTerm) 
          }}
        />
      </article>
    </Link>
  )
}

export default PostCard 