// import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Introduction from './pages/Introduction';
import Setup from "./pages/Setup";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/setup" element={<Setup />} />
          {/* <Route path="/features" element={<Features />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
