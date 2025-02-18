import { Routes, Route } from "react-router-dom"
import LoginPage from "./routes/LoginPage"
import SignUpPage from "./routes/SignUpPage"
import Dashboard from "./routes/Dashboard"

const App = () => {
  return (
    <div className="w-screen h-screen bg-[#DEE2E6]">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
