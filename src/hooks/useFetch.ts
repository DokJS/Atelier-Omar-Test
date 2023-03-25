import { useState, useEffect } from 'react'
import { Player } from '../models/types'

export default function useFetch(url: string) {
    const [data, setData] = useState<{ players: Player[] } | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error(
                        'Sorry! the service is not available, try again later.'
                    )
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
                await new Promise((resolve) => setTimeout(resolve, 2000)) // simulate loading time
                setIsLoading(false)
            }
        }
        fetchData()
    }, [url])
    return { data, isLoading, error }
}
