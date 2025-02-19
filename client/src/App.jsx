import { Routes, Route } from "react-router-dom"
import LoginPage from "./routes/LoginPage"
import SignUpPage from "./routes/SignUpPage"
import DashboardPage from "./routes/DashboardPage"

const App = () => {
  return (
    <div className="w-screen h-screen bg-[#DEE2E6] font-rubik">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </div>
  )
}

export default App
