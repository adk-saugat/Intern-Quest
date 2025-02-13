import { Routes, Route } from "react-router-dom"
import LandingPage from "./routes/LandingPage"
import Login from "./components/Login"
import SignUp from "./components/SignUp"

const App = () => {
  return (
    <div className="overflow-scroll">
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
