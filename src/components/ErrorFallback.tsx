const errorMsgStyle = {
    color: 'white',
    position: 'absolute',
    top: '50%',
    left: '5%',
    fontSize: '1.5rem',
} as React.CSSProperties
interface ErrorFallbackProps {
    error: string
    resetErrorBoundary: () => void
}
export default function ErrorFallback({
    error,
    resetErrorBoundary,
}: ErrorFallbackProps) {
    return (
        <div role="alert" style={errorMsgStyle}>
            <p>Something went wrong:</p>
            <pre>{error}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}
