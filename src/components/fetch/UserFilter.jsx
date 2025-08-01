function UserFilter({ userIdFilter, onFilterChange, totalPosts, filteredCount }) {
  // 사용자 ID 옵션 생성 (1-10)
  const userOptions = Array.from({ length: 10 }, (_, i) => i + 1)

  return (
    <div className="user-filter">
      <div className="filter-container">
        <label htmlFor="userIdSelect" className="filter-label">
          사용자 필터:
        </label>
        <select
          id="userIdSelect"
          value={userIdFilter}
          onChange={(e) => onFilterChange(e.target.value)}
          className="filter-select"
        >
          <option value="">전체 사용자</option>
          {userOptions.map(userId => (
            <option key={userId} value={userId}>
              사용자 {userId}
            </option>
          ))}
        </select>
        <button 
          onClick={() => onFilterChange('')}
          className="clear-button"
          disabled={!userIdFilter}
        >
          전체보기
        </button>
      </div>
      
      {userIdFilter && (
        <div className="filter-result">
          사용자 {userIdFilter}의 포스트: {filteredCount}개 (전체 {totalPosts}개 중)
        </div>
      )}
    </div>
  )
}

export default UserFilter 