import PlayerCard from './PlayerCard'
import { Player } from '../models/types'
interface CardContainerProps {
    data: Player[]
}
export default function CardContainer({ data }: CardContainerProps) {
    return (
        <div className="card-container">
            {data.map((player: Player) => {
                return <PlayerCard key={player.id} player={player} />
            })}
        </div>
    )
}
