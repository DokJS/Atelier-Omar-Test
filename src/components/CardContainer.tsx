import { useState, Fragment } from 'react'
import Modal from './Modal'
import PlayerCard from './PlayerCard'
import { Player } from '../models/types'
interface CardContainerProps {
    data: Player[]
}
export default function CardContainer({ data }: CardContainerProps) {
    const [selectedPlayerIndex, setSelectedPlayerIndex] = useState<
        number | null
    >(null)
    return (
        <div className="card-container">
            {data.map((player: Player, index: number) => {
                const shouldDisplayModal = index === selectedPlayerIndex
                return (
                    <Fragment>
                        <PlayerCard
                            key={player.id}
                            player={player}
                            setSelectedPlayerIndex={setSelectedPlayerIndex}
                            index={index}
                        />
                        {shouldDisplayModal && <Modal player={player} />}
                    </Fragment>
                )
            })}
        </div>
    )
}
