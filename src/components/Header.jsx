
const Header = () => {
    return (
        <header className="w-full bg-black text-white h-15 p-5 items-center fixed z-10">
          <nav className="flex justify-between w-4/5  m-auto items-center">
            <div className="logo">
                <ul className="flex gap-2 items-center">
                    <li><img src="https://flowbite.com/docs/images/logo.svg" alt="" /></li>
                    <li className="text-2xl font-medium">GeeksFoods</li>
                </ul>
            </div>
            <div className="center">
                <ul className="flex gap-6 font-medium">
                    <li className="text-blue-500"><a href="#">Home</a></li>
                    <li><a href="#">Quote</a></li>
                    <li><a href="#">Restaurents</a></li>
                    <li><a href="#">Foods</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="right">
                <button className="bg-blue-600  p-2 rounded-lg text-sm font-medium">Get Started</button>
            </div>
          </nav>
        </header>
    )
}

export default Header