import { useEffect, useState } from "react";
import getTickerData from "../utilities/getTickerData";
import Tickerchild from "./TickerChild";

const Ticker = ({bitData, setBitData, isLoading, setIsLoading}) => {
    const [fetchTrigger, setFetchTrigger] = useState(true)

    useEffect(() => {
        const bitcoinData = async () => {
            try {
                const result = await getTickerData()
                setBitData(result)
                setIsLoading((prev) => {!prev})
            } catch (error) {
                console.log("error", error.response)
            }
        } 
        bitcoinData()

    }, [fetchTrigger])

    const intervalRefresh = setInterval(() => {
        setFetchTrigger((prev) => {!prev}, 3000)
    })

     clearInterval(intervalRefresh)
    
    return !isLoading ? (

        <div className="flex flex-col items-center mt-2">
        <h2 className="text-xl">Current Values of BTC</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 md:lg:grid-cols-4 bg-blue-200 m-2 p-2 border rounded">
            {Object.values(bitData).map((data) => {
             return <Tickerchild key={data.symbol} data={data}/>
            })}
        </div>
        </div>
    ) :
    <h1>Loading</h1>
}

export default Ticker;