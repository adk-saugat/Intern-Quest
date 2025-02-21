import Sidebar from "./Sidebar"

const Header = ({ isDashboard = false }) => {
  return (
    <div className=" relative bg-[#343A40] text-[#E9ECEF] sm:w-[30%]">
      <div className="font-bold flex justify-between item-center sm:justify-center text-3xl m-6 font-averia ">
        <span>
          Intern <span className="underline underline-offset-10">Quest</span>
        </span>
        <span className="block sm:hidden">
          <button className="font-rubik font-normal text-sm px-4 py-2 rounded-3xl text-[#E9ECEF] bg-[#495057] shadow-2xl hover:bg-white hover:text-black">
            Log Out
          </button>
        </span>
      </div>
      {isDashboard && <Sidebar className="" />}
    </div>
  )
}

export default Header
