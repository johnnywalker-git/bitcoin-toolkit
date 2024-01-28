import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Ticker from './components/Ticker'
import Converter from './components/Converter'

function App() {
  const [bitData, setBitData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  return (
        <div>
        <div className='flex flex-col justify-center items-center  bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 '>
          <Header />
          <Converter bitData={bitData} isLoading={isLoading}/>
          <Ticker bitData={bitData} setBitData={setBitData} isLoading={isLoading} setIsLoading={setIsLoading}/>
        </div>
        <footer className='flex justify-center bg-blue-900 text-white'><a href="https://github.com/johnnywalker-git">Johnathan Walker 2024.</a></footer>
        </div>
  )
}

export default App
