import React from "react"
import CoinDetails from "../CoinDetails/CoinDetails"

function CoinMarketDetails({ data }) {
    return (
        <div className="text-gray-400 text-xs border dark:border-gray-600 p-2 flex flex-col justify-center items-center">
            <div className="flex flex-row justify-between w-full">
                <CoinDetails field="Price">
                    {new Intl.NumberFormat().format(data.price)}
                </CoinDetails>
                <CoinDetails field="Market Cap">
                    {new Intl.NumberFormat().format(data.market_cap)}
                </CoinDetails>
                <CoinDetails field="24H Volume">
                    {new Intl.NumberFormat().format(data.daily_volume)}
                </CoinDetails>
            </div>
        </div>
    )
}

export default CoinMarketDetails
