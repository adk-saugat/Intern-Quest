import { Outlet } from "react-router"
import Header from "../components/header"

const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen sm:w-screen sm:flex-row">
      <Header />
      <Outlet />
    </div>
  )
}

export default LandingPage
