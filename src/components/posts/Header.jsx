function Header({ postsCount }) {
  return (
    <header className="header">
      <h1>게시판</h1>
      <p>총 {postsCount}개의 포스트</p>
    </header>
  )
}

export default Header 