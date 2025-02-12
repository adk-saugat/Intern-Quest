const Header = () => {
  const imageUrl =
    "https://i.pinimg.com/736x/41/d4/da/41d4dacfcab895b86bb83d64bb2fca7f.jpg"
  return (
    <div
      className="h-[35%] bg-cover bg-center shadow-2xl "
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <h1 className="mt-8 ml-8 tracking-tighter text-3xl font-semibold text-gray-700 font-averia">
        <span>
          Intern <span className="text-[#00a896]">Quest</span>
        </span>
      </h1>
    </div>
  )
}

export default Header
