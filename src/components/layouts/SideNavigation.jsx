import { Link } from 'react-router'

function SideNavigation() {
  const popularPosts = [1, 2, 3, 4, 5, 10, 15, 20, 25, 50]
  
  return (
    <aside className="w-64 bg-white border-r border-gray-200 shadow-sm">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-3 border-b-2 border-blue-500">
          📋 Posts Menu
        </h3>
        
        <nav className="space-y-2">
          <Link 
            to="/posts" 
            className="block w-full px-4 py-3 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors mb-6"
          >
            📋 All Posts
          </Link>
          
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Popular Posts
            </h4>
            
            <div className="space-y-1">
              {popularPosts.map(postId => (
                <Link 
                  key={postId}
                  to={`/posts/${postId}`}
                  className="block px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors"
                >
                  📄 Post #{postId}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <div className="text-xs text-blue-700 text-center">
              💡 Tip: Click on any post to see details, author info, and comments!
            </div>
          </div>
        </nav>
      </div>
    </aside>
  )
}

export default SideNavigation 