import { Dashboard } from "../components/Dashboard"
import Header from "../components/Header"

const DashboardPage = () => {
  const isDashboard = true
  return (
    <div className="flex flex-col h-screen sm:w-screen sm:flex-row">
      <Header isDashboard={isDashboard} />
      <Dashboard />
    </div>
  )
}

export default DashboardPage
