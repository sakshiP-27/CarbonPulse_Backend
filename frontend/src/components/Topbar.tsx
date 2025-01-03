export const Topbar = () => {
    return <div className="flex justify-between">
        <div className="text-2xl font-bold font-sans px-8 py-4">
            <span className="text-yellow-200">Carbon</span>
            <span className="text-green-600">Pulse</span>
        </div>
        <div className="flex space-x-2 px-8 py-4">
            <span className="text-lg text-yellow-200 py-1">About</span>
            <span className="rounded-2xl bg-green-600 text-lg cursor-pointer text-white px-5 py-1">
                Login
            </span>
        </div>
    </div>
}