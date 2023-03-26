import PlayerCard from '../PlayerCard'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { player } from '../../data/player'

describe('PlayerCard', () => {
    const setSelectedPlayerIndex = jest.fn()
    test('should renders player card with informations passed', () => {
        render(
            <PlayerCard
                player={player}
                setSelectedPlayerIndex={setSelectedPlayerIndex}
                index={10}
            />
        )
        expect(screen.getByAltText('NovakDjokovic')).toBeInTheDocument()
        expect(screen.getByText('Novak Djokovic')).toBeInTheDocument()
        expect(screen.getByText('#2')).toBeInTheDocument()
        expect(screen.getByText('2542')).toBeInTheDocument()
        expect(screen.getByText('Serbia')).toBeInTheDocument()
    })
    test('should call the click handler when the user clicks on the card', () => {
        render(
            <PlayerCard
                player={player}
                setSelectedPlayerIndex={setSelectedPlayerIndex}
                index={10}
            />
        )
        userEvent.click(screen.getByText('Novak Djokovic'))
        expect(setSelectedPlayerIndex).toHaveBeenCalledTimes(1)
    })
})
