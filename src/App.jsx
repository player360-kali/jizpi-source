import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import Directions from "./pages/Directions"
import Departments from "./pages/Departments"
import News from "./pages/News"

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/directions" element={<Directions />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  )
}

export default App