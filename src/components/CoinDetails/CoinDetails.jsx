import React from "react"

function CoinDetails({ field, children }) {
    return (
        <div className="flex flex-col justify-center items-center">
            <dd className="text-md md:text-lg lg:text-xl leading-9 font-semibold text-gray-900 dark:text-white">
                ${children}
            </dd>
            <dd className="text-gray-500 font-semibold text-md">
                <span>{field}</span>
            </dd>
        </div>
    )
}

export default CoinDetails
