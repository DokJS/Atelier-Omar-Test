import { useState } from 'react'
import SearchBar from './components/SearchBar'
import CardContainer from './components/CardContainer'
import Loader from './components/Loader'
import useFetch from './hooks/useFetch'
import './App.scss'
const URL = ' https://data.latelier.co/training/tennis_stats/headtohead.json'
function App() {
    const { data, isLoading, error } = useFetch(URL)
    const [inputValue, setInputValue] = useState('')
    console.log(data)
    if (isLoading) {
        return (
            <Loader style={{ position: 'absolute', top: '50%', left: '15%' }} />
        )
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        data && (
            <div className="app-container">
                <SearchBar
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                />
                <CardContainer data={data} />
            </div>
        )
    )
}

export default App
