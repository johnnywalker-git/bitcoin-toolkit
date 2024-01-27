import axios from "axios";

async function getTickerData () {
    try {
        const response = await axios.get('https://www.blockchain.com/ticker')
        return response.data
        
    } catch (error) {
        console.log("error", error.response)
    }
}

export default getTickerData;