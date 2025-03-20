import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import BlogEntry from "../pages/BlogEntry/BlogEntry";

export const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogEntry />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
