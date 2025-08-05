import { Link } from 'react-router'

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="text-6xl font-bold text-gray-300 mb-4">
          404
        </div>
        
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          페이지를 찾을 수 없습니다
        </h1>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.<br />
          URL을 다시 확인해 주세요.
        </p>
        
        <div className="mb-8">
          <Link 
            to="/"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-blue-600 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md"
          >
            🏠 홈으로 돌아가기
          </Link>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-600 text-sm mb-4">
            다른 페이지로 이동하시겠습니까?
          </p>
          <nav className="flex justify-center gap-4 flex-wrap">
            <Link 
              to="/info/about" 
              className="text-blue-600 hover:text-blue-700 text-sm px-2 py-1 rounded hover:bg-blue-50 transition-colors"
            >
              About
            </Link>
            <Link 
              to="/posts" 
              className="text-blue-600 hover:text-blue-700 text-sm px-2 py-1 rounded hover:bg-blue-50 transition-colors"
            >
              Posts
            </Link>
            <Link 
              to="/info/counter" 
              className="text-blue-600 hover:text-blue-700 text-sm px-2 py-1 rounded hover:bg-blue-50 transition-colors"
            >
              Counter
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default NotFound 