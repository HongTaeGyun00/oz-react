import './App.css'
import { Routes, Route, Link } from 'react-router'
import Posts from './posts/Posts'
import Post from './posts/Post'
import Counter from './counter/Counter'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Post/>} />
      </Routes>
    </>
  )
}

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/posts">Posts</Link> | <Link to="/counter">Counter</Link>
    </nav>
  )
}

export default App
