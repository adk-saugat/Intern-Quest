import Header from "../components/Header"
import Login from "../components/Login"

const LoginPage = () => {
  return (
    <div className="flex flex-col h-screen sm:w-screen sm:flex-row">
      <Header />
      <Login />
    </div>
  )
}

export default LoginPage
