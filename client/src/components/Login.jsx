// import { FcGoogle } from "react-icons/fc"
const Login = () => {
  return (
    <div className="h-[65%] bg-gray-100 flex flex-col item-center p-8 text-gray-800">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Welcome Back!</h1>
        <p className="text-md font-normal text-black">
          Enter your details to continue.
        </p>
      </div>
      {/* <div className="mt-4">
        <button className="shadow-sm hover:shadow-md cursor-pointer flex justify-center gap-2 border border-[#00a896] w-full p-4 rounded-md text-lg text-[#00a896]">
          <FcGoogle size="28px" />
          <span className="font-semibold text-lg">Login with Google</span>
        </button>
      </div> */}
      <form action="" className="mt-8 flex flex-col items-center gap-4">
        <div className="w-full">
          <label className="text-xl font-semibold">Username</label>
          <input
            className="mt-1 border rounded-md border-gray-300 p-4 text-lg w-full"
            type="email"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="w-full">
          <label className="text-xl font-semibold">Password</label>
          <input
            type="password"
            className="mt-1 border rounded-md border-gray-300 p-4 text-lg w-full"
            placeholder="******"
          />
        </div>

        <div className="w-full mt-4">
          <button className="font-semibold text-gray-800 shadow-md hover:shadow-lg cursor-pointer bg-[#00a896] w-full p-4 rounded-md text-lg">
            <span className="text-xl">Login</span>
          </button>
        </div>
        <div className="font-semibold text-md">
          <span>Don't have an account?</span>
          <a className="text-[#00a896] cursor-pointer"> Sign up for free</a>
        </div>
      </form>
    </div>
  )
}

export default Login
