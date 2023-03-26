import { useState, Fragment, useCallback } from 'react'
import ModalContainer from './ModalContainer'
import PlayerCard from './PlayerCard'
import { Player } from '../models/types'
interface CardContainerProps {
    data: Player[]
}
export default function CardContainer({ data }: CardContainerProps) {
    const [selectedPlayerIndex, setSelectedPlayerIndex] = useState<
        number | null
    >(null)
    const handleClose = useCallback(() => {
        setSelectedPlayerIndex(null)
    }, [])
    return (
        <div className="card-container">
            {data.map((player: Player, index: number) => {
                const shouldDisplayModal = index === selectedPlayerIndex
                return (
                    <Fragment key={index}>
                        <PlayerCard
                            key={player.id}
                            player={player}
                            setSelectedPlayerIndex={setSelectedPlayerIndex}
                            index={index}
                        />
                        {shouldDisplayModal && (
                            <ModalContainer
                                player={player}
                                handleClose={handleClose}
                            />
                        )}
                    </Fragment>
                )
            })}
        </div>
    )
}
