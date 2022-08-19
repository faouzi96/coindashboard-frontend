import React from "react"
import { ThreeDots } from "react-loader-spinner"

function Loader({ height = 150, width = 150, chart = false }) {
    return (
        <div className="w-full flex justify-center intem center">
            {chart ? (
                <h1 className="mt-20">
                    <ThreeDots color="#00BFFF" height={height} width={width} />
                </h1>
            ) : (
                <h1>
                    <ThreeDots color="#00BFFF" height={height} width={width} />
                </h1>
            )}
        </div>
    )
}

export default Loader
