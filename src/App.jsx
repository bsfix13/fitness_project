import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'
import Membership from './pages/Membership'
import BlogPost from './pages/BlogPost'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogPost />} />
        <Route path="shop" element={<Shop />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="membership" element={<Membership />} />
      </Route>
    </Routes>
  )
}

export default App
