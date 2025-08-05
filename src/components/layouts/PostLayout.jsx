import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import SideNavigation from './SideNavigation'

function PostLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex-1 flex">
        <SideNavigation />
        <main className="flex-1 p-6 sm:p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default PostLayout 