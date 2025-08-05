function Header({ postsCount }) {
  return (
    <header className="mb-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">📋 게시판</h1>
        <p className="text-gray-600">
          총 <span className="font-semibold text-blue-600">{postsCount}</span>개의 포스트
        </p>
      </div>
    </header>
  )
}

export default Header 