import Home from "./pages/Home"
import Addition from "./pages/Addition"
import Subtraction from "./pages/Subtraction"
import Division from "./pages/Division"
import Multiplication from "./pages/Multiplication"
import "./styles/App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/addition" element={<Addition />} />
        <Route path="/subtraction" element={<Subtraction />} />
        <Route path="/multiplication" element={<Multiplication />} />
        <Route path="/division" element={<Division />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}


export default App;


