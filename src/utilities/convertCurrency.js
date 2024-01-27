import axios from "axios";

const convertCurrency = async (currency = 'USD', amount = '1') => {
    try {
        const response = await axios.get(`https://blockchain.info/tobtc?currency=${currency}&value=${amount}`)
        return response.data
        
    } catch (error) {
        console.log("error", error.response)
    }

}

export default convertCurrency;