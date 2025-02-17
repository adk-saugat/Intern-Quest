import Header from "../components/Header"
import SignUp from "../components/SignUp"

const SignUpPage = () => {
  return (
    <div className="flex flex-col h-screen sm:w-screen sm:flex-row">
      <Header />
      <SignUp />
    </div>
  )
}

export default SignUpPage
