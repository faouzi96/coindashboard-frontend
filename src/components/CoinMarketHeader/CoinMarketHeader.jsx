import React from "react"

function CoinMarketHeader({ name, symbol, lastUpdate }) {
    return (
        <span className="text-gray-600 dark:text-white text-2xl font-medium mb-2 flex flex-row justify-between items-center">
            <span>
                {name} ({symbol.toUpperCase()})
            </span>
            <span className="text-xs text-gray-500">{lastUpdate}</span>
        </span>
    )
}

export default CoinMarketHeader
