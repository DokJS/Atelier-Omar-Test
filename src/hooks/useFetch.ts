import { useState, useEffect } from 'react'
import { Response } from '../models/types'
import { handleErrorResponseStatus, handleErrorThrown } from '../utils/helper'

export default function useFetch(url: string) {
    const [data, setData] = useState<Response | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    handleErrorResponseStatus(response.status)
                }
                const json = await response.json()
                setData(json)
            } catch (error) {
                handleErrorThrown(error, setError)
            } finally {
                await new Promise((resolve) => setTimeout(resolve, 2000)) // simulate loading time
                setIsLoading(false)
            }
        }
        fetchData()
    }, [url])
    return { data, isLoading, error }
}
