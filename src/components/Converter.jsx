import { useState } from "react"
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import convertCurrency from "../utilities/convertCurrency"
import FormHelperText from '@mui/material/FormHelperText';
import CircularProgress from '@mui/material/CircularProgress';



const Converter = ({bitData, isLoading}) => {
    const [inputValue, setInputValue] = useState("") 
    const [currency, setCurrency] = useState("")
    const [currencyResult, setCurrencyResult] = useState(0)
    const[error, setError] = useState(false)
    const[currencyError,setCurrencyError] = useState(false)

    
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
        if(parseFloat(amount) > 0 && currency){
        try {
            const bitResult = await convertCurrency(currency,amount)
            setCurrencyResult(bitResult)
            setError((prev) => {!prev})
            setCurrencyError(false)
        } catch (error) {
            console.log(error.response)
        }}
        else if(parseFloat(amount) > 0 && !currency) {
            setCurrencyError(true)
        }
        else {
            setError((prev) => !prev)
        }
    }
    
    return !isLoading ? (
            
        <div className="flex items-center justify-center w-full p-5 h-auto">
            <div className="flex flex-col items-center justify-center place-items-center m-5 bg-blue-400 p-5 rounded-lg border drop-shadow-md">
                <div><h2 className="text-xl text-blue-900 w-auto font-bold">BTC Converter</h2></div>
                 <form className="flex flex-row items-center justify-center gap-2 m-2">
                    <div className="flex flex-col"> 
                    <InputLabel id="demo-simple-select-label">Amount</InputLabel>
                    <TextField required helperText={error ? "Amount must be more than 0.00" : ""} error={error} id="outlined-basic" aria-label="amount input box"onChange={(e) => {handleAmountChange(e)}}/>
                    </div>
                    <div className="flex flex-col"> 
                    <InputLabel id="currency-label" defaultValue="Hello World" >Currency</InputLabel>
                    <Select
                        labelId="select-label"
                        id="select"
                        value={currency}
                        label="Currency"
                        error={currencyError}
                        onChange={(e) => {handleCurrencyChange(e)}}
                    >
                    /*Select menu items from BTC data./*
                    {Object.values(bitData).map((item) => {
                        return <MenuItem key={item.symbol}value={item.symbol}>{item.symbol}</MenuItem>
                    })}
                    </Select>
                    <FormHelperText id="demo-simple-select-error-label">{currencyError ? "Select a currency" : ""}</FormHelperText>
                    </div>
                    </form>
                    <button onClick={(e) => {handleSubmit(e,currency,inputValue)}} className="button-66 self-center mt-5"value={inputValue}>Convert</button>
                  
                    { currencyResult && !error ? (
                        <div className="results w-full flex justify-center p-2 text-xl bg-blue-800 m-2 text-white rounded-xl">
                        <p>{currencyResult} BTC</p>
                        </div>
                    ):
                    null
                    }
            </div>
        </div>
    ) :
    <CircularProgress />


}


export default Converter