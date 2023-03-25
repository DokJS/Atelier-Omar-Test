import { useState } from 'react'
import SearchBar from './components/SearchBar'
import CardContainer from './components/CardContainer'
import Loader from './components/Loader'
import useFetch from './hooks/useFetch'
import { endpoints } from './services/api'
import './styles/App.scss'

const errorMsgStyle = {
    color: 'white',
    position: 'absolute',
    top: '50%',
    left: '5%',
} as React.CSSProperties
const loaderStyle = {
    position: 'absolute',
    top: '50%',
    left: '15%',
} as React.CSSProperties

function App() {
    const url = endpoints.getPlayersData()
    const { data, isLoading, error } = useFetch(url)
    const [inputValue, setInputValue] = useState('')

    if (isLoading) {
        return <Loader style={loaderStyle} />
    }
    if (error) {
        return <h1 style={errorMsgStyle}>{error}</h1>
    }
    return (
        data && (
            <div className="app-container">
                <SearchBar
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                />
                <CardContainer data={data.players} />
            </div>
        )
    )
}

export default App
