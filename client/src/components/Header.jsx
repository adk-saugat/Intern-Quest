import NavBar from "./NavBar"

const Header = ({ isDashboard = false }) => {
  return (
    <div className="bg-[#343A40] text-[#E9ECEF] sm:w-[30%]">
      <h1 className="m-6 font-averia font-bold flex sm:justify-center text-3xl">
        Intern <span className="underline underline-offset-10">Quest</span>
      </h1>
      {isDashboard && <NavBar />}
    </div>
  )
}

export default Header
