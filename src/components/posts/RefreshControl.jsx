import { useState, useEffect } from 'react'

function RefreshControl({ onRefresh, loading, lastUpdated }) {
  const [autoRefresh, setAutoRefresh] = useState(false)
  const [countdown, setCountdown] = useState(30)

  useEffect(() => {
    let interval = null
    
    if (autoRefresh && !loading) {
      interval = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            onRefresh()
            return 30 // 30초로 리셋
          }
          return prev - 1
        })
      }, 1000)
    } else {
      setCountdown(30)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [autoRefresh, loading, onRefresh])

  const handleManualRefresh = () => {
    onRefresh()
    setCountdown(30) // 수동 새로고침 시 카운트다운 리셋
  }

  const formatTime = (seconds) => {
    return `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`
  }

  const formatLastUpdated = (timestamp) => {
    const now = new Date()
    const updated = new Date(timestamp)
    const diffSeconds = Math.floor((now - updated) / 1000)
    
    if (diffSeconds < 60) return `${diffSeconds}초 전`
    if (diffSeconds < 3600) return `${Math.floor(diffSeconds / 60)}분 전`
    return updated.toLocaleTimeString('ko-KR', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    })
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="text-sm text-gray-600">
          마지막 업데이트: 
          <span className="font-medium text-gray-900">
            {lastUpdated ? formatLastUpdated(lastUpdated) : '처음 로드'}
          </span>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <button
            onClick={handleManualRefresh}
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                새로고침 중...
              </>
            ) : (
              <>
                <span>🔄</span>
                새로고침
              </>
            )}
          </button>

          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={autoRefresh}
              onChange={(e) => setAutoRefresh(e.target.checked)}
              disabled={loading}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <span className="ml-2 text-sm text-gray-700">
              자동 새로고침 (30초)
              {autoRefresh && !loading && (
                <span className="text-blue-600 font-medium"> - {formatTime(countdown)}</span>
              )}
            </span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default RefreshControl 