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

        const intervalRefresh = setInterval(() => {
            setFetchTrigger((prev) => {!prev}, 30000)
        })
    
        return () => clearInterval(intervalRefresh)
        
    }, [fetchTrigger])

    return !isLoading ? (

        <div className="flex flex-col items-center mt-2 justify-center">
        <h2 className="text-xl w-full text-center bg-blue-800 rounded m-2 mb-0 p-2 w-full text-white text-s font-bold">Current Values of BTC</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 md:lg:grid-cols-4 bg-blue-200 m-2 mt-0 p-2 w-full border rounded">
            {Object.values(bitData).map((data) => {
             return <Tickerchild key={data.symbol} data={data}/>
            })}
        </div>
        </div>
    ) :
    <h1>Loading</h1>
}

export default Ticker;