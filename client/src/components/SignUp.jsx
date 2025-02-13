import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
  const [displayName, setDisplayName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  return (
    <div className="h-[65%] bg-gray-100 flex flex-col p-8 pt-6 text-gray-800 sm:h-screen sm:w-[40%] sm:justify-center sm:items-center">
      <span className="sm:max-w-sm">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Get Started!</h1>
          <p className="text-md font-normal text-black">
            Creat a free Account.
          </p>
        </div>
        <form className="mt-6 flex flex-col items-center gap-4">
          <div className="w-full">
            <label className="text-xl font-semibold sm:text-[16px]">
              Display Name
            </label>
            <input
              className="mt-1 border rounded-md border-gray-300 p-4 text-lg w-full sm:text-sm"
              type="email"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="e.g. John"
              required
            />
          </div>
          <div className="w-full">
            <label className="text-xl font-semibold sm:text-[16px]">
              Username
            </label>
            <input
              className="mt-1 border rounded-md border-gray-300 p-4 text-lg w-full sm:text-sm"
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div className="w-full">
            <label className="text-xl font-semibold sm:text-[16px]">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 border rounded-md border-gray-300 p-4 text-lg w-full sm:text-sm"
              placeholder="********"
              required
            />
          </div>

          <div className="w-full mt-4">
            <button className="font-semibold text-gray-800 shadow-md hover:shadow-lg cursor-pointer bg-[#00a896] w-full p-4 rounded-md text-lg">
              <span className="text-xl sm:text-md">Sign Up</span>
            </button>
          </div>
          <div className="font-semibold text-md">
            <span>Already have an account? </span>
            <a
              className="text-[#00a896] cursor-pointer hover:underline"
              onClick={() => navigate("/")}
            >
              Login
            </a>
          </div>
        </form>
      </span>
    </div>
  )
}

export default SignUp
