const NavBar = () => {
  return (
    <div className="w-full flex justify-between px-10 pt-10">
      <div>
        <h1 className="text-4xl font-medium">Hello Saugat</h1>
        <p className="text-lg text-[#6C757D]">Welcome back!</p>
      </div>
      <div className="flex items-center">
        <button className="hidden sm:block bg-[#343A40] text-md px-6 py-2 rounded-3xl cursor-pointer text-[#E9ECEF] hover:bg-[#495057]">
          Log Out
        </button>
      </div>
    </div>
  )
}

export default NavBar
