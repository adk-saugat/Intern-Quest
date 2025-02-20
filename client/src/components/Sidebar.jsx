import { RiHomeLine } from "react-icons/ri"
import { AiOutlineAppstore } from "react-icons/ai"
import { IoSettingsOutline } from "react-icons/io5"
import { CgProfile } from "react-icons/cg"

const Sidebar = () => {
  return (
    <div className="hidden sm:block sm:px-8 sm:pt-10 sm:border-t-2 sm:border-t-[#495057]">
      <ul className="flex flex-col gap-4 text-xl">
        <li className="flex items-center gap-4 px-4 py-2 rounded-3xl hover:bg-[#495057] hover:shadow-2xl">
          <RiHomeLine />
          <span>Dashboard</span>
        </li>
        <li className="flex items-center gap-4 px-4 py-2 rounded-3xl hover:bg-[#495057] hover:shadow-2xl">
          <AiOutlineAppstore />
          <span>Applications</span>
        </li>
        <li className="flex items-center gap-4 px-4 py-2 rounded-3xl hover:bg-[#495057] hover:shadow-2xl">
          <IoSettingsOutline />
          <span>Setting</span>
        </li>
        <li className="flex items-center gap-4 px-4 py-2 rounded-3xl hover:bg-[#495057] hover:shadow-2xl">
          <CgProfile />
          <span>Profile</span>
        </li>
        <li className="block sm:hidden">
          <button className=" bg-[#343A40] text-md px-6 py-2 rounded-3xl shadow-6xl cursor-pointer text-[#E9ECEF] hover:bg-[#495057]">
            Log Out
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
