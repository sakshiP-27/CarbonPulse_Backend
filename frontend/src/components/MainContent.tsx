export const MainContent = () => {
    return <div className="w-full px-12">
        <CardBoard />
    </div>
}

export const CardBoard = () => {
    return <div className="transition-all duration-100 h-80 rounded-2xl flex justify-between items-center -translate-y-12 backdrop-blur-xl hover:outline outline-offset-4">
        <div className="w-7/10 flex flex-col justify-center space-y-4 p-8"> {/* Heading */}
            <span className="font-coustard font-bold text-green-800 text-3xl text-center">
                Track Your Carbon Footprint, Make A Difference
            </span>
            <span className="text-gray-600 text-base text-center"> {/* Sub Content */}
                A comprehensive and easy to use tool with personalized recommendations to help you aciheve your carbon footprint reduction goals. Make the Earth greener again!
            </span>
            <div className="bg-green-800 rounded-xl items-center h-8 w-4">
                Get Started!
            </div>
        </div>
        <div className="w-3/10 h-full flex items-center justify-center p-8"> {/* Image */}
            <img src="/src/assets/imgs/content-image2.jpg" alt="sapling" className="w-96 h-72 rounded-xl" />
        </div>
    </div>
}