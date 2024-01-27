import { useState } from "react"
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import convertCurrency from "../utilities/convertCurrency"

const Converter = ({bitData}) => {
    const [inputValue, setInputValue] = useState("") 
    const [currency, setCurrency] = useState("")
    const [currencyResult, setCurrencyResult] = useState(0)

    const handleChange = (e) => {
        e.preventDefault()
        setInputValue(e.target.value)
    }

    const handleCurrencyChange = (e) => {
        e.preventDefault()
        setCurrency(e.target.value)
      };

    const handleSubmit = async (e,currency, amount) => {
        e.preventDefault()
        try {
            const bitResult = await convertCurrency(currency,amount)
            setCurrencyResult(bitResult)
            console.log(bitResult, "results")
        } catch (error) {
            console.log(error.response)
        }
    }

    return(
        <div className="flex items-center justify-center bg-blue-400 w-full h-auto">
            <div className="flex flex-col items-center justify-center">
                 <form action="" className="flex flex-row items-center justify-center gap-2">
                    <div className="flex flex-col"> 
                    <InputLabel id="demo-simple-select-label">Amount</InputLabel>
                    <TextField id="outlined-basic" label="Insert Amount" onChange={(e) => {handleChange(e)}}/>
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
                        <MenuItem value={'BHT'}>BHT</MenuItem>
                        <MenuItem value={'GBP'}>GBP</MenuItem>
                        <MenuItem value={'USD'}>USD</MenuItem>
                    </Select>
                    </div>
                    <button onClick={(e) => {handleSubmit(e,currency,inputValue)}} className="button-66 self-end"value={inputValue}>Convert</button>
                 </form>
            </div>
        </div>
    )

}


export default Converter