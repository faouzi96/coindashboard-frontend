import React from "react"

function ErrorRequestMessage({ message, margin = false }) {
    return margin ? (
        <div className="w-full flex mt-32 pb-14 justify-center items-center">
            <div className="text-center">
                <h1 className="text-sm md:text-xl font-semibold text-red-500">
                    SERVER ERROR
                </h1>
                <h3 className="text-xs md:text-lg font-semibold text-gray-500 dark:text-gray-400">
                    {message}
                </h3>
            </div>
        </div>
    ) : (
        <div className="w-full flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-sm md:text-xl font-semibold text-red-500">
                    SERVER ERROR
                </h1>
                <h3 className="text-xs md:text-lg font-semibold text-gray-500 dark:text-gray-400">
                    {message}
                </h3>
            </div>
        </div>
    )
}

export default ErrorRequestMessage
