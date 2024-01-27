import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Ticker from './components/Ticker'
import Converter from './components/Converter'

function App() {
  const [bitData, setBitData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  return (
        <div className='flex flex-col justify-center items-center'>
          <Header />
          <Ticker bitData={bitData} setBitData={setBitData} isLoading={isLoading} setIsLoading={setIsLoading}/>
          <Converter bitData={bitData} isLoading={isLoading}/>
        </div>
  )
}

export default App
