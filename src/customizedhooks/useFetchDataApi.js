import { useState, useEffect } from "react"
import axios from "axios"
import configData from "./../configData.json"

const axiosClient = axios.create({
    baseURL: configData.BASE_SERVER_URL
})

const useFetchDataApi = (path, params = null) => {
    const [data, setData] = useState(null)
    const [status, setStatus] = useState(102)
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        ;(async function () {
            try {
                const response = await axiosClient.get(path, { params: params })
                setStatus(response.status)
                setData(response.data)
            } catch (error) {
                setStatus(error)
            } finally {
                setLoader(false)
            }
        })()
    }, [path, params])

    return [status, loader, data]
}

export default useFetchDataApi
