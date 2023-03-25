import { useState, useEffect } from 'react'

export default function useFetch(url: string) {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error('Something went wrong! try again later')
                }
                const json = await response.json()
                setData(json)
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message)
                } else {
                    setError(error as string)
                }
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [url])
    return { data, isLoading, error }
}
