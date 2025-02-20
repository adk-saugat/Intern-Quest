import Sidebar from "./Sidebar"
import { GiHamburgerMenu } from "react-icons/gi"

const Header = ({ isDashboard = false }) => {
  return (
    <div className="bg-[#343A40] text-[#E9ECEF] sm:w-[30%]">
      <div className="font-bold flex justify-between item-center sm:justify-center text-3xl m-6 font-averia ">
        <span>
          Intern <span className="underline underline-offset-10">Quest</span>
        </span>
        <span className="block sm:hidden">
          <GiHamburgerMenu
            size={40}
            className="hover:shadow-2xl cursor-pointer hover:text-[#CED4DA]"
          />
        </span>
      </div>
      {isDashboard && <Sidebar />}
    </div>
  )
}

export default Header
