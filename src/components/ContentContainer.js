import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
function ContentContainer() {

  return (
    <>
      <div className="col p-5 bg-secondary bg-gradient">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default ContentContainer