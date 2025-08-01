function SearchFilter({ searchTerm, onSearchChange, searchResults, highlightEnabled, onHighlightToggle }) {
  return (
    <div className="search-filter">
      <div className="search-container">
        <label htmlFor="searchInput" className="search-label">
          제목 또는 내용 검색:
        </label>
        <input
          id="searchInput"
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="검색어를 입력하세요..."
          className="search-input"
        />
        {searchTerm && (
          <button 
            onClick={() => onSearchChange('')}
            className="search-clear-button"
            aria-label="검색어 지우기"
          >
            ✕
          </button>
        )}
      </div>
      
      {searchTerm && (
        <>
          <div className="search-result">
            "{searchTerm}" 검색 결과: {searchResults}개
          </div>
          
          <div className="highlight-control">
            <label className="highlight-toggle">
              <input
                type="checkbox"
                checked={highlightEnabled}
                onChange={(e) => onHighlightToggle(e.target.checked)}
              />
              <span className="highlight-text">
                🔍 검색어 하이라이팅
              </span>
            </label>
          </div>
        </>
      )}
    </div>
  )
}

export default SearchFilter 