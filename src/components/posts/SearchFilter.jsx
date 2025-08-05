function SearchFilter({ searchTerm, onSearchChange, searchResults, highlightEnabled, onHighlightToggle }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <label htmlFor="searchInput" className="block text-sm font-medium text-gray-700 mb-2">
            제목 또는 내용 검색:
          </label>
          <div className="relative">
            <input
              id="searchInput"
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="검색어를 입력하세요..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
            />
            {searchTerm && (
              <button 
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label="검색어 지우기"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>
      
      {searchTerm && (
        <div className="mt-4 space-y-3">
          <div className="p-3 bg-green-50 rounded-lg">
            <p className="text-sm text-green-800">
              <span className="font-semibold">"{searchTerm}"</span> 검색 결과: 
              <span className="font-semibold text-green-600"> {searchResults}개</span>
            </p>
          </div>
          
          <div className="flex items-center">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={highlightEnabled}
                onChange={(e) => onHighlightToggle(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <span className="ml-2 text-sm text-gray-700">
                🔍 검색어 하이라이팅
              </span>
            </label>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchFilter 