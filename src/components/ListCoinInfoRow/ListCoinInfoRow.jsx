import React from "react"

function ListCoinInfoRow({ name, display }) {
    return (
        <div className="flex items-center mb-2 pb-4 dark:border-gray-600 justify-between border-b">
            <div className="flex items-center w-full justify-between">
                <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                    <p className="dark:text-white">{name}</p>
                </div>
                <span className="text-green-400">{display}</span>
            </div>
        </div>
    )
}

export default ListCoinInfoRow
