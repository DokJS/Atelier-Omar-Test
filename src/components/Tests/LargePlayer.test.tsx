import LargePlayerCard from '../LargePlayerCard'
import { render, screen } from '@testing-library/react'
import { player } from '../../data/player'

describe('LargePlayerCard', () => {
    test('should renders player card with informations passed', () => {
        render(<LargePlayerCard player={player} />)
        expect(screen.getByAltText('NovakDjokovic')).toBeInTheDocument()
        expect(screen.getByAltText('SRB')).toBeInTheDocument()
        expect(screen.getByText('Novak')).toBeInTheDocument()
        expect(screen.getByText('Serbia')).toBeInTheDocument()
        expect(screen.getByText('Djokovic')).toBeInTheDocument()
        expect(screen.getByText('#2')).toBeInTheDocument()
        expect(screen.getByText('2542')).toBeInTheDocument()
        expect(screen.getAllByText('SRB')).toHaveLength(1)
    })
})
