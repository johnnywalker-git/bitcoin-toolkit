import { Icon } from '@iconify/react';
import { useState } from 'react';


const Tickerchild = ({ data }) => { 

    const[isOpen, setIsOpen] = useState(false)

    function getExtraData(e) {
        e.preventDefault()
        setIsOpen((prev) => !prev)
    }

    return (
        <div className='flex flex-col bg-blue-800 m-1 p-1 w-48 border border-gray-500 rounded text-white'>
        <div className="flex  items-center justify-evenly">
            <p className="m-1 w-1/5">{data.symbol}</p>
            <p className="m-1 w-3/5">{data["15m"]}</p>
            <Icon icon="gridicons:dropdown" color="white" onClick={getExtraData} className='w-1/5' rotate={isOpen && "2"}/>
        </div>
    {
        isOpen &&  <div className='flex flex-col items-center place-content-between'>
            <div className='flex place-content-between w-2/3'>
            <p className='text-xs text-blue-300'>Last</p>
            <p className='text-xs'>{data.last}</p>
            </div>
            <div className='flex place-content-between w-2/3'>
            <p className='text-xs text-green-500'>Buy</p>
            <p className='text-xs'>{data.buy}</p>
            </div>
            <div className='flex place-content-between w-2/3'>
            <p className='text-xs text-red-500'>Sell</p>
            <p className='text-xs'>{data.sell}</p>
            </div>
        </div>
    }
    </div>
    )
        
}

export default Tickerchild