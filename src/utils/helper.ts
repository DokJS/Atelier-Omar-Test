export function handleErrorThrown(
    error: unknown,
    setError: (error: string) => void
) {
    if (error instanceof Error) {
        console.error(error.message)
        setError(error.message)
    } else {
        console.error(error)
        setError(error as string)
    }
}
export function handleErrorResponseStatus(statusCode: number) {
    if (statusCode === 404) {
        throw new Error('Ressource Not found')
    } else if (statusCode === 500) {
        throw new Error('Server error')
    } else if (statusCode === 401) {
        throw new Error('Unauthorized')
    }
}
