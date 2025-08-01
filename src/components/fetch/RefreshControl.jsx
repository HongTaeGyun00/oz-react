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
    <div className="refresh-control">
      <div className="refresh-info">
        <div className="last-updated">
          마지막 업데이트: {lastUpdated ? formatLastUpdated(lastUpdated) : '처음 로드'}
        </div>
        
        <div className="refresh-actions">
          <button
            onClick={handleManualRefresh}
            disabled={loading}
            className={`refresh-button ${loading ? 'loading' : ''}`}
          >
            {loading ? (
              <>
                <span className="refresh-spinner">⟳</span>
                새로고침 중...
              </>
            ) : (
              <>
                <span>🔄</span>
                새로고침
              </>
            )}
          </button>

          <label className="auto-refresh-toggle">
            <input
              type="checkbox"
              checked={autoRefresh}
              onChange={(e) => setAutoRefresh(e.target.checked)}
              disabled={loading}
            />
            <span className="toggle-text">
              자동 새로고침 (30초)
              {autoRefresh && !loading && (
                <span className="countdown"> - {formatTime(countdown)}</span>
              )}
            </span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default RefreshControl 