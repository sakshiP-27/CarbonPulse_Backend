export const Topbar = () => {
    return <div className="sticky top-0 flex justify-between mx-auto items-center">
        <div className="transition-all duration-500 px-4 py-4 hover:bg-slate-200 rounded-2xl cursor-pointer">
            <img 
                src="/src/assets/CP_Logo_Final.png" 
                alt="logo"
                width={100}
                height={100} 
            />
        </div>
        <div className="flex space-x-2 px-8 py-4 relative">
            <span className="transition-all duration-500 text-lg rounded-xl hover:bg-yellow-300 bg-white hover:text-white text-black py-2 px-5 cursor-pointer">
                Contact Us
            </span>
            <span className="transition-all duration-500 text-lg rounded-xl hover:bg-yellow-500 bg-white hover:text-white text-black py-2 px-5 cursor-pointer">
                About
            </span>
            <span 
                className="transition-all duration-500 rounded-xl hover:bg-orange-600 bg-white text-lg cursor-pointer hover:text-white text-black py-2 px-5"
            >
                Login
            </span>
        </div>
    </div>
}