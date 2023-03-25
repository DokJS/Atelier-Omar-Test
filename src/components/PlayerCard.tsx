import { Player } from '../models/types'
import '../styles/Card.scss'
interface PlayerCardProps {
    player: Player
    setSelectedPlayerIndex: React.Dispatch<React.SetStateAction<number | null>>
    index: number
}
export default function PlayerCard({
    player,
    setSelectedPlayerIndex,
    index,
}: PlayerCardProps) {
    const { firstname, lastname, data, country, picture } = player
    const { rank, points } = data
    const { code } = country
    return (
        <div className="card" onClick={() => setSelectedPlayerIndex(index)}>
            <div className="card__img">
                <img src={picture} alt={firstname + lastname} />
            </div>
            <div className="card__col">
                <div className="card__col--title">
                    {firstname} {lastname}
                </div>
                <div className="card__col--body">
                    <div className="col">
                        <div className="card__col--body__subtitle">Rank</div>
                        <div className="card__col--body__info">#{rank}</div>
                    </div>
                    <div className="col">
                        <div className="card__col--body__subtitle">Points</div>
                        <div className="card__col--body__info">{points}</div>
                    </div>
                    <div className="col">
                        <div className="card__col--body__subtitle">Country</div>
                        <div className="card__col--body__info">{code}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
