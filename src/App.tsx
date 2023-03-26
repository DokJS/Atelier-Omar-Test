import { useState, useCallback } from 'react'
import SearchBar from './components/SearchBar'
import CardContainer from './components/CardContainer'
import Loader from './components/Loader'
import ErrorFallback from './components/ErrorFallback'
import useFetch from './hooks/useFetch'
import { endpoints } from './services/api'
import './styles/App.scss'

const loaderStyle = {
    position: 'absolute',
    top: '50%',
    left: '15%',
} as React.CSSProperties

function App() {
    const url = endpoints.getPlayersData()
    const { data, isLoading, error } = useFetch(url)
    const [inputValue, setInputValue] = useState('')
    const resetErrorBoundary = useCallback(() => {
        window.location.reload() // for reload the page
    }, [])

    if (isLoading) {
        return <Loader style={loaderStyle} />
    }
    if (error) {
        return (
            <ErrorFallback
                error={error}
                resetErrorBoundary={resetErrorBoundary}
            />
        )
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
