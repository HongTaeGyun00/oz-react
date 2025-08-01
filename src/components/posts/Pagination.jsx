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
    <div className="pagination-container">
      <div className="pagination-info">
        {totalItems}개 중 {startItem}-{endItem}번째 표시
      </div>
      
      <div className="pagination">
        {/* 첫 페이지 버튼 */}
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className="pagination-button first"
          aria-label="첫 페이지"
        >
          ««
        </button>

        {/* 이전 페이지 버튼 */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-button prev"
          aria-label="이전 페이지"
        >
          ‹
        </button>

        {/* 페이지 번호들 */}
        {pageNumbers.map(pageNum => (
          <button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            className={`pagination-button number ${currentPage === pageNum ? 'active' : ''}`}
          >
            {pageNum}
          </button>
        ))}

        {/* 다음 페이지 버튼 */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-button next"
          aria-label="다음 페이지"
        >
          ›
        </button>

        {/* 마지막 페이지 버튼 */}
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="pagination-button last"
          aria-label="마지막 페이지"
        >
          »»
        </button>
      </div>
    </div>
  )
}

export default Pagination 