import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
    <Routes>
      <Route path="/post/:postId" element={<PostPage />} />
    </Routes>
  </Router>
      
    </>
  )
}

export default App
