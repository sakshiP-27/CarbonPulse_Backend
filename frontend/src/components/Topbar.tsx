export const Topbar = () => {
    return <div className="sticky top-0 flex justify-between mx-auto items-center bg-gray-300">
        <div className="px-8 py-4 cursor-pointer">
            <img 
                src="/src/assets/cp-logo.png" 
                alt="logo"
                width={200}
                height={100} 
            />
        </div>
        <div className="flex space-x-2 px-8 py-4">
            <span className="text-lg text-black py-1 px-5 cursor-pointer">
                About
            </span>
            <span className="rounded-xl bg-black text-lg cursor-pointer text-white px-5 py-1">
                Login
            </span>
        </div>
    </div>
}