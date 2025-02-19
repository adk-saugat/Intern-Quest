import { useState } from "react"
import { useNavigate } from "react-router"
import axios from "axios"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        email,
        password,
      })
      localStorage.setItem("auth-token", response.data.token)
      navigate("/dashboard")
    } catch (error) {
      console.log(error.response.data.error)
    }
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col sm:gap-4">
        <h2 className="text-center font-semibold text-5xl sm:text-6xl">
          Welcome back!
        </h2>
        <p className="text-center text-md">Enter your details to continue!</p>
      </div>
      <form
        action=""
        className="flex flex-col gap-4 text-lg sm:w-full sm:max-w-[350px]"
      >
        <div className="flex flex-col">
          <label>Username</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            className="border border-[#ADB5BD] rounded-sm p-2"
            required
          />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <label>Password</label>
            <a
              onClick={() => setShowPassword(!showPassword)}
              className="text-sm font-semibold text-blue-500 cursor-pointer"
            >
              {showPassword ? "Hide" : "Show"}
            </a>
          </div>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            className="border border-[#ADB5BD] rounded-sm p-2"
            required
          />
        </div>
        <div className="flex flex-col">
          <button
            onClick={handleLogin}
            className="bg-[#343A40] rounded-sm py-2 font-semibold text-[#CED4DA] shadow-sm hover:bg-[#495057] cursor-pointer"
          >
            Login
          </button>
          <p className="text-center mt-2 text-sm">
            Don't have an account?{" "}
            <a
              className="text-blue-500 hover:underline cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              signup
            </a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login
