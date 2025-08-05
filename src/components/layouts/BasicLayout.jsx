import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

function BasicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 p-6 sm:p-8">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default BasicLayout 