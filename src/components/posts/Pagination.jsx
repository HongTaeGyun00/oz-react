function Pagination({ currentPage, totalPages, onPageChange, itemsPerPage, totalItems }) {
  const getPageNumbers = () => {
    const pageNumbers = []
    const maxVisiblePages = 5

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i)
    }

    return pageNumbers
  }

  if (totalPages <= 1) return null

  const pageNumbers = getPageNumbers()
  const startItem = (currentPage - 1) * itemsPerPage + 1
  const endItem = Math.min(currentPage * itemsPerPage, totalItems)

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">
          {totalItems}개 중 <span className="font-medium text-gray-900">{startItem}-{endItem}</span>번째 표시
        </div>
        
        <div className="flex items-center gap-1">
          {/* 첫 페이지 버튼 */}
          <button
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
            className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="첫 페이지"
          >
            ««
          </button>

          {/* 이전 페이지 버튼 */}
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border-t border-b border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="이전 페이지"
          >
            ‹
          </button>

          {/* 페이지 번호들 */}
          {pageNumbers.map(pageNum => (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`px-3 py-2 text-sm font-medium border-t border-b border-gray-300 ${
                currentPage === pageNum 
                  ? 'bg-blue-500 text-white border-blue-500' 
                  : 'bg-white text-gray-500 hover:bg-gray-50'
              }`}
            >
              {pageNum}
            </button>
          ))}

          {/* 다음 페이지 버튼 */}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border-t border-b border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="다음 페이지"
          >
            ›
          </button>

          {/* 마지막 페이지 버튼 */}
          <button
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="마지막 페이지"
          >
            »»
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pagination 