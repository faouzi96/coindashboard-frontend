import React from "react"
import { Line } from "react-chartjs-2"
import Chart from "chart.js/auto"

function getChartTime(data, i) {
    const arr = []
    data.forEach((element) => {
        if (i === 0) arr.push(new Date(element.timestamp).toLocaleDateString())
        else arr.push(element.price)
    })
    return arr
}

function ChartCoin({ data }) {
    const chartData = {
        labels: getChartTime(data, 0),
        datasets: [
            {
                label: "Prices",
                data: getChartTime(data, 1),
                fill: "origin",
                backgroundColor: "#09C1EC80",
                borderColor: "#09C1EC",
                borderWidth: 2
            }
        ]
    }
    return (
        <div className="w-full">
            <Line
                data={chartData}
                options={{
                    scales: {
                        y: {
                            beginAtZero: false,
                            grid: {
                                display: true
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    }
                }}
            />
        </div>
    )
}

export default ChartCoin

/**
 * 
const DATA = {
    prices: [
        [1659398400000, 23333.749243312184],
        [1659484800000, 23053.846847482677],
        [1659571200000, 22860.42098438317],
        [1659657600000, 22678.363633874185],
        [1659744000000, 23225.036201942938],
        [1659830400000, 22984.57953144855],
        [1659916800000, 23197.603469525384],
        [1660003200000, 23823.679442453606],
        [1660089600000, 23203.680696781623],
        [1660176000000, 23948.829553271633],
        [1660262400000, 23948.75170368143],
        [1660348800000, 24411.379871522615],
        [1660435200000, 24433.653747243658],
        [1660521600000, 24312.541424891562],
        [1660593695000, 24040.452576597032]
    ],
    market_caps: [
        [1659398400000, 445958949620.3002],
        [1659484800000, 440954684720.7478],
        [1659571200000, 437035641450.2815],
        [1659657600000, 432420621055.8012],
        [1659744000000, 443821669890.4801],
        [1659830400000, 439414782173.18774],
        [1659916800000, 442979379284.1196],
        [1660003200000, 455450642522.25543],
        [1660089600000, 443382534834.6949],
        [1660176000000, 457270455537.3291],
        [1660262400000, 458070674127.7904],
        [1660348800000, 466765701334.6809],
        [1660435200000, 467078368768.6749],
        [1660521600000, 464896345363.0234],
        [1660593695000, 459713097627.37775]
    ],
    total_volumes: [
        [1659398400000, 44489771146.510735],
        [1659484800000, 35151096516.75639],
        [1659571200000, 41334593234.075066],
        [1659657600000, 23624874220.429745],
        [1659744000000, 27040190909.828075],
        [1659830400000, 14439694271.14074],
        [1659916800000, 14324042469.270954],
        [1660003200000, 27756736787.028625],
        [1660089600000, 29738069337.77638],
        [1660176000000, 32215976525.650154],
        [1660262400000, 33892871243.716595],
        [1660348800000, 25195193357.103275],
        [1660435200000, 22240559959.522095],
        [1660521600000, 21287616855.704494],
        [1660593695000, 32644175001.160007]
    ]
}

const data = {
    labels: getChartTime(DATA.total_volumes, 0),
    datasets: [
        {
            label: "Prices",
            data: getChartTime(DATA.prices, 1),
            fill: "origin",
            backgroundColor: "#09C1EC80",
            borderColor: "#09C1EC",
            borderWidth: 2
        },
        {
            label: "Market Cap",
            data: getChartTime(DATA.market_caps, 1),
            fill: "origin",
            backgroundColor: "#4451E280",
            borderColor: "#4451E2",
            borderWidth: 2
        },
        {
            label: "Total Volume",
            data: getChartTime(DATA.total_volumes, 1),
            fill: "origin",
            backgroundColor: "#E03B1B80",
            borderColor: "#E03B1B",
            borderWidth: 2
        }
    ]
}

 */
