import { useNavigate } from "react-router"

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col sm:gap-4">
        <h2 className="text-center font-semibold text-4xl sm:text-6xl">
          Welcome back!
        </h2>
        <p className="text-center text-md">Enter your details to continue!</p>
      </div>
      <form action="" className="flex flex-col gap-4 text-lg">
        <div className="flex flex-col">
          <label>Username</label>
          <input
            type="email"
            className="border border-[#ADB5BD] rounded-sm p-2"
          />
        </div>
        <div className="flex flex-col">
          <label>Password</label>
          <input
            type="password"
            className="border border-[#ADB5BD] rounded-sm p-2"
          />
        </div>
        <div className="flex flex-col">
          <button className="bg-[#343A40] rounded-sm py-2 font-semibold text-[#CED4DA] shadow-sm hover:bg-[#495057] cursor-pointer">
            Login
          </button>
          <p className="text-center mt-2">
            Don't have an account?{" "}
            <a
              className="text-blue-800 hover:underline cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              {" "}
              Sign Up
            </a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login
