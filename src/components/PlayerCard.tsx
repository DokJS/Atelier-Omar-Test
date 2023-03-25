import { Player } from '../models/types'
interface PlayerCardProps {
    player: Player
}
export default function PlayerCard({ player }: PlayerCardProps) {
    const { firstname, lastname, data, country, picture } = player
    const { rank, points } = data
    const { code } = country
    return <div>PlayerCard</div>
}
