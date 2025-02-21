import { RiHomeLine } from "react-icons/ri"
import { AiOutlineAppstore } from "react-icons/ai"
import { IoSettingsOutline } from "react-icons/io5"
import { CgProfile } from "react-icons/cg"

const Sidebar = () => {
  return (
    <div className="w-full sm:px-8 sm:pt-10 sm:border-t-2 sm:border-t-[#495057]">
      <ul className="flex sm:flex-col justify-evenly sm:gap-4 gap-2 text-3xl sm:text-xl px-2 sm:px-0 py-2 sm:py-0 bg-[#343A40] sm:bg-transparent">
        <li className="flex items-center gap-2 sm:gap-4 px-3 py-2 sm:rounded-3xl hover:bg-[#495057] hover:shadow-2xl">
          <RiHomeLine />
          <span className="hidden sm:inline">Dashboard</span>
        </li>
        <li className="flex items-center gap-2 sm:gap-4 px-3 py-2 sm:rounded-3xl hover:bg-[#495057] hover:shadow-2xl">
          <AiOutlineAppstore />
          <span className="hidden sm:inline">Applications</span>
        </li>
        <li className="flex items-center gap-2 sm:gap-4 px-3 py-2 sm:rounded-3xl hover:bg-[#495057] hover:shadow-2xl">
          <IoSettingsOutline />
          <span className="hidden sm:inline">Setting</span>
        </li>
        <li className="flex items-center gap-2 sm:gap-4 px-3 py-2 sm:rounded-3xl hover:bg-[#495057] hover:shadow-2xl">
          <CgProfile />
          <span className="hidden sm:inline">Profile</span>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
