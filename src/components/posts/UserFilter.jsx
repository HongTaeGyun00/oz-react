function UserFilter({ userIdFilter, onFilterChange, totalPosts, filteredCount }) {
  // 사용자 ID 옵션 생성 (1-10)
  const userOptions = Array.from({ length: 10 }, (_, i) => i + 1)

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <label htmlFor="userIdSelect" className="text-sm font-medium text-gray-700">
            사용자 필터:
          </label>
          <select
            id="userIdSelect"
            value={userIdFilter}
            onChange={(e) => onFilterChange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">전체 사용자</option>
            {userOptions.map(userId => (
              <option key={userId} value={userId}>
                사용자 {userId}
              </option>
            ))}
          </select>
        </div>
        <button 
          onClick={() => onFilterChange('')}
          className="px-4 py-2 bg-gray-500 text-white text-sm rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!userIdFilter}
        >
          전체보기
        </button>
      </div>
      
      {userIdFilter && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            사용자 <span className="font-semibold">{userIdFilter}</span>의 포스트: 
            <span className="font-semibold text-blue-600"> {filteredCount}개</span> 
            (전체 {totalPosts}개 중)
          </p>
        </div>
      )}
    </div>
  )
}

export default UserFilter 