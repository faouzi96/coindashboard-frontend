import React from "react"

function LoaderCoinItems() {
    return (
        <div className="w-full h-24 rounded-md mx-auto">
            <div className="flex animate-pulse flex-row items-center h-full justify-around space-x-5 px-6">
                <div className="w-32 bg-gray-300 h-1 rounded-md "></div>
                <div className="w-32 bg-gray-300 h-1 rounded-md "></div>
                <div className="w-32 bg-gray-300 h-1 rounded-md "></div>
                <div className="w-32 bg-gray-300 h-1 rounded-md "></div>
                <div className="w-32 bg-gray-300 h-1 rounded-md "></div>
            </div>
        </div>
    )
}

export default LoaderCoinItems
