import Home from "../components/Home"
import Header from "../components/Header"

const DashboardPage = () => {
  const isDashboard = true
  return (
    <div className="flex flex-col h-screen sm:w-screen sm:flex-row">
      <Header isDashboard={isDashboard} />
      <Home />
    </div>
  )
}

export default DashboardPage
