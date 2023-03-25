import { Player } from '../models/types'
interface ModalProps {
    player: Player
}
export default function Modal({ player }: ModalProps) {
    const { firstname, lastname, data, country, picture } = player
    const { code, picture: countryFlag } = country
    const { rank, points, age, weight, height } = data
    return <div>Modal</div>
}
