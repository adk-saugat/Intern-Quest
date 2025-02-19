import { useState } from "react"
import { useNavigate } from "react-router"

const SignUp = () => {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault()
    console.log(displayName, email, password)
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col sm:gap-4">
        <h2 className="text-center font-semibold text-5xl sm:text-6xl">
          Hello there!
        </h2>
        <p className="text-center text-md">Register to get started.</p>
      </div>
      <form
        action=""
        className="flex flex-col gap-4 text-lg sm:w-full sm:max-w-[350px]"
      >
        <div className="flex flex-col">
          <label>Display Name</label>
          <input
            type="text"
            placeholder="e.g. John"
            onChange={(e) => setDisplayName(e.target.value)}
            className="border border-[#ADB5BD] rounded-sm p-2"
            required
          />
        </div>
        <div className="flex flex-col">
          <label>Username</label>
          <input
            type="email"
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
            onClick={handleSignUp}
            className="bg-[#343A40] rounded-sm py-2 font-semibold text-[#CED4DA] shadow-sm hover:bg-[#495057] cursor-pointer"
          >
            Sign Up
          </button>
          <p className="text-center mt-2 text-sm">
            Already have an account?{" "}
            <a
              className="text-blue-500 hover:underline cursor-pointer"
              onClick={() => navigate("/")}
            >
              login
            </a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default SignUp
