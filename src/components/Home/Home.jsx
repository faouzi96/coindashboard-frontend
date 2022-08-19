import React from "react"
import TableCoins from "../TableCoins/TableCoins"

function Home({ setCoinName }) {
    return (
        <div>
            <div className="bg-white dark:bg-gray-800">
                <div className="text-center w-full mx-auto py-4 px-4">
                    <TableCoins setCoinName={setCoinName} />
                </div>
            </div>
        </div>
    )
}

export default Home
