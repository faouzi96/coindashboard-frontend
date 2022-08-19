import React from "react"
import CoinImage from "../CoinImage/CoinImage"

function CoinInfo({ data }) {
    return (
        <div className="flex flex-col justify-center items-center border dark:border-gray-600 bg-white dark:bg-gray-800 p-4">
            <div className="flex-row gap-4 flex justify-center items-center">
                <CoinImage urlImage={data.image_url} />
                <div className=" flex flex-col">
                    <span className="text-gray-600 dark:text-white text-lg font-medium">
                        {data.name} ({data.symbol.toUpperCase()})
                    </span>
                    <div className="text-gray-400 text-xs">
                        {data.description}
                        <br />
                        <div className="flex-row mt-2 gap-4 text-xs">
                            <a
                                href={data.links[0].url}
                                target="_blink"
                                className="mr-2"
                            >
                                {data.links[0].title}
                            </a>
                            <a
                                href={data.links[1].url}
                                target="_blink"
                                className="mr-2"
                            >
                                {data.links[1].title}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoinInfo
