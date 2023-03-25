import { BounceLoader } from 'react-spinners'
interface LoaderProps {
    color?: string
    size?: number
    style?: React.CSSProperties
}
export default function Loader({
    color = 'white',
    size = 150,
    style,
}: LoaderProps) {
    return <BounceLoader color={color} size={size} style={style} />
}
