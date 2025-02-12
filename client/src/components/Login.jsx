import { FcGoogle } from "react-icons/fc"
const Login = () => {
  return (
    <div className="h-[90%] bg-gray-100 flex flex-col item-center p-8 text-gray-800">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Welcome Back!</h1>
        <p className="text-md font-normal text-black">
          Continue with Google or enter your details.
        </p>
      </div>
      <div className="mt-4">
        <button className="cursor-pointer flex justify-center gap-2 border border-[#00a896] w-full py-2 rounded-md text-lg text-[#00a896]">
          <FcGoogle size="28px" />
          <span>Login with Google</span>
        </button>
      </div>
      <form action="">
        <label htmlFor="">Username</label>
        <input type="email" placeholder="example@gmail.com" />

        <label htmlFor="">Password</label>
        <input type="password" placeholder="******" />

        <div>
          <button>Login</button>
        </div>
        <div>
          <span>Don't have an account?</span>
          <a href="">Sign Up for free</a>
        </div>
      </form>
    </div>
  )
}

export default Login
