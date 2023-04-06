import { useState, Fragment, useCallback } from 'react'
import ModalContainer from './ModalContainer'
import PlayerCard from './PlayerCard'
import { Player } from '../models/types'
interface CardContainerProps {
    data: Player[]
    inputValue: string
}
export default function CardContainer({
    data,
    inputValue,
}: CardContainerProps) {
    const [selectedPlayerIndex, setSelectedPlayerIndex] = useState<
        number | null
    >(null)
    const lowerInputValue = inputValue.toLowerCase()
    const handleClose = useCallback(() => {
        setSelectedPlayerIndex(null)
    }, [])
    return (
        <div className="card-container">
            {data
                .filter((player: Player) => {
                    const { firstname, lastname, data } = player
                    const { rank, points } = data
                    return (
                        firstname.toLowerCase().includes(lowerInputValue) ||
                        lastname.toLowerCase().includes(lowerInputValue) ||
                        rank.toString() === inputValue ||
                        points.toString() === inputValue
                    )
                })
                .map((player: Player, index: number) => {
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
