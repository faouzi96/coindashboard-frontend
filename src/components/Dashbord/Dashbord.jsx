import React from "react"
import CoinInfo from "../CoinInfo/CoinInfo"
import ChartCoin from "../Chart/ChartCoin"
import BitcoinImg from "../../img/bitcoin.png"
import CoinMarketData from "../CoinMarketData/CoinMarketData"
import configData from "../../configData.json"
import ListCoinInfo from "../ListCoinInfo/ListCoinInfo"
import useFetchDataApi from "../../customizedhooks/useFetchDataApi"
import Loader from "../Loader/Loader"
import ErrorRequestMessage from "../ErrorRequestMessage/ErrorRequestMessage"

function Dashbord({ coinName }) {
    // do the API call using ---- /api/coins/coinName
    const [statusCoinInfo, loaderCoinInfo, coinInfo] = useFetchDataApi(
        configData.COINS_PATH + "/" + coinName
    )
    // do the API call for the Chart component using ---- /api/coins/coinName/chart
    const [statusCoinChart, loaderCoinChart, coinChart] = useFetchDataApi(
        configData.COINS_PATH + "/" + coinName + "/chart"
    )
    // do the API call for the coin market using ---- /api/coins/coinName/marketdata
    const [statusCoinMarket, loaderCoinMarket, coinMarket] = useFetchDataApi(
        configData.COINS_PATH + "/" + coinName + "/marketdata"
    )

    return (
        <main
            id="dashboard"
            className="pt-4 px-2 grid md:grid-cols-3 gap-2 grid-cols-1 h-full dark:bg-gray-800 dark:text-white"
        >
            <div className="md:col-span-2 col-span-1">
                {!loaderCoinMarket ? (
                    statusCoinMarket !== 200 ? (
                        <ErrorRequestMessage
                            message={statusCoinMarket.message}
                        />
                    ) : (
                        <CoinMarketData
                            data={coinMarket}
                            urlImage={BitcoinImg}
                        />
                    )
                ) : (
                    <Loader height={80} width={80} />
                )}

                {!loaderCoinChart ? (
                    statusCoinChart !== 200 ? (
                        <ErrorRequestMessage
                            message={statusCoinChart.message}
                            margin={true}
                        />
                    ) : (
                        <ChartCoin data={coinChart} />
                    )
                ) : (
                    <Loader chart={true} />
                )}
            </div>
            <div>
                {!loaderCoinInfo ? (
                    statusCoinInfo !== 200 ? (
                        <ErrorRequestMessage message={statusCoinInfo.message} />
                    ) : (
                        <CoinInfo data={coinInfo} />
                    )
                ) : (
                    <Loader height={80} width={80} />
                )}

                {!loaderCoinMarket ? (
                    statusCoinMarket !== 200 ? (
                        <ErrorRequestMessage
                            message={statusCoinMarket.message}
                            margin={true}
                        />
                    ) : (
                        <ListCoinInfo data={coinMarket} />
                    )
                ) : (
                    <Loader height={80} width={80} chart={true} />
                )}
            </div>
        </main>
    )
}

export default Dashbord
