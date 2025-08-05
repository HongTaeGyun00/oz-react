import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'
// import './Post.css'

const Post = () => {
  const { postId } = useParams()
  const [post, setPost] = useState(null)
  const [user, setUser] = useState(null)
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        setLoading(true)
        setError(null)

        // 포스트 상세 정보 가져오기
        const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        if (!postResponse.ok) {
          throw new Error('포스트를 찾을 수 없습니다.')
        }
        const postData = await postResponse.json()
        setPost(postData)

        // 사용자 정보와 댓글을 병렬로 가져오기
        const [userResponse, commentsResponse] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`),
          fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        ])

        if (!userResponse.ok) {
          throw new Error('사용자 정보를 가져올 수 없습니다.')
        }
        if (!commentsResponse.ok) {
          throw new Error('댓글을 가져올 수 없습니다.')
        }

        const userData = await userResponse.json()
        const commentsData = await commentsResponse.json()

        setUser(userData)
        setComments(commentsData)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (postId) {
      fetchPostData()
    }
  }, [postId])

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="w-24 h-8 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-16 h-6 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="h-6 bg-gray-200 rounded w-32 mb-4 animate-pulse"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="h-5 bg-gray-200 rounded w-24 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-40 animate-pulse"></div>
            </div>
            <div className="space-y-3">
              <div className="h-5 bg-gray-200 rounded w-16 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-48 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-36 animate-pulse"></div>
            </div>
            <div className="space-y-3">
              <div className="h-5 bg-gray-200 rounded w-20 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-40 animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="h-6 bg-gray-200 rounded w-24 mb-4 animate-pulse"></div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map(index => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="text-6xl mb-4">😕</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">오류가 발생했습니다</h2>
        <p className="text-gray-600 mb-6">{error}</p>
        <Link 
          to="/posts" 
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          ← 포스트 목록으로 돌아가기
        </Link>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">포스트를 찾을 수 없습니다</h2>
        <Link 
          to="/posts" 
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          ← 포스트 목록으로 돌아가기
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <Link 
            to="/posts" 
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
          >
            ← 포스트 목록
          </Link>
          <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded">
            Post #{post.id}
          </span>
        </div>

        <article>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{post.title}</h1>
          <p className="text-gray-700 leading-relaxed text-lg">{post.body}</p>
        </article>
      </div>

      {/* 작성자 정보 */}
      {user && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">👤 작성자 정보</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-gray-900">{user.name}</h4>
              <p className="text-gray-600">@{user.username}</p>
              <p className="text-gray-600">📧 {user.email}</p>
              <p className="text-gray-600">📞 {user.phone}</p>
              <p className="text-gray-600">🌐 {user.website}</p>
            </div>
            <div className="space-y-3">
              <h5 className="font-semibold text-gray-900">📍 주소</h5>
              <p className="text-gray-600">{user.address.street}, {user.address.suite}</p>
              <p className="text-gray-600">{user.address.city}, {user.address.zipcode}</p>
            </div>
            <div className="space-y-3">
              <h5 className="font-semibold text-gray-900">🏢 회사</h5>
              <p className="font-medium text-gray-900">{user.company.name}</p>
              <p className="text-gray-600">{user.company.catchPhrase}</p>
            </div>
          </div>
        </div>
      )}

      {/* 댓글 목록 */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          💬 댓글 ({comments.length}개)
        </h3>
        {comments.length === 0 ? (
          <p className="text-gray-500 text-center py-8">아직 댓글이 없습니다.</p>
        ) : (
          <div className="space-y-6">
            {comments.map(comment => (
              <div key={comment.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                <div className="flex items-center gap-2 mb-3">
                  <strong className="text-gray-900">{comment.name}</strong>
                  <span className="text-sm text-gray-500">({comment.email})</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{comment.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Post