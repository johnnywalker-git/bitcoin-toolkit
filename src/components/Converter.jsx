import { useState } from "react"
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import convertCurrency from "../utilities/convertCurrency"

const Converter = ({bitData, isLoading}) => {
    const [inputValue, setInputValue] = useState("") 
    const [currency, setCurrency] = useState("")
    const [currencyResult, setCurrencyResult] = useState(0)
    const[error, setError] = useState(false)

    
    const handleAmountChange = (e) => {
        e.preventDefault()
        setInputValue(e.target.value)
    }
  
    const handleCurrencyChange = (e) => {
        e.preventDefault()
        setCurrency(e.target.value)
      };
    

    const handleSubmit = async (e,currency, amount) => {
        e.preventDefault()
        if(parseFloat(amount) > 0){
        try {
            const bitResult = await convertCurrency(currency,amount)
            setCurrencyResult(bitResult)
            setError((prev) => {!prev})
        } catch (error) {
            console.log(error.response)
        }}
        else {
            setError((prev) => !prev)
        }
    }


    return !isLoading ? (
            
        <div className="flex items-center justify-center bg-blue-400 w-full h-auto">
            <div className="flex flex-col items-center justify-center">
                 <form className="flex flex-row items-center justify-center gap-2">
                    <div className="flex flex-col"> 
                    <InputLabel id="demo-simple-select-label">Amount</InputLabel>
                    <TextField id="outlined-basic" aria-label="amount input box"onChange={(e) => {handleAmountChange(e)}}/>
                    </div>
                    <div className="flex flex-col"> 
                    <InputLabel id="demo-simple-select-label" required>Currency</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={currency}
                        label="Currency"
                        required
                        onChange={(e) => {handleCurrencyChange(e)}}
                    >
                    /*Select menu items from BTC data./*
                    {Object.values(bitData).map((item) => {
                        return <MenuItem key={item.symbol}value={item.symbol}>{item.symbol}</MenuItem>
                    })}
                    </Select>
                    </div>
                    <button onClick={(e) => {handleSubmit(e,currency,inputValue)}} className="button-66 self-end"value={inputValue}>Convert</button>
                 </form>
                  
                    { currencyResult && !error ? (
                        <div className="results">
                        <p>Your Currency of {parseFloat(inputValue).toFixed(2)} {currency} is currently worth {currencyResult} BTC</p>
                        </div>
                    ):
                    null
                    }
                   
                    {
                        error && (
                           <p>Invalid input amount: amount must be more than 0.00</p>
                        )
                    }

            </div>
        </div>
    ) :
    <h1>Loading...</h1>

}


export default Converter