
import {  Route, BrowserRouter, Routes } from "react-router-dom"
import Home from "./components/Home"
import Congrats from "./components/Congrats"

function App() {
  return ( 
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/congrats" element={<Congrats/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
