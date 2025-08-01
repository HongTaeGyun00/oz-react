function SkeletonCard() {
  return (
    <article className="post-card skeleton-card">
      <div className="post-header">
        <span className="skeleton skeleton-id"></span>
        <span className="skeleton skeleton-user"></span>
      </div>
      <div className="skeleton skeleton-title"></div>
      <div className="skeleton skeleton-title-second"></div>
      <div className="skeleton skeleton-body"></div>
      <div className="skeleton skeleton-body"></div>
      <div className="skeleton skeleton-body-last"></div>
    </article>
  )
}

export default SkeletonCard 