import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
function ContentContainer() {

  return (
    <>
      <div class="col py-3">
        Content area...
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>


      </div>
    </>
  )
}

export default ContentContainer