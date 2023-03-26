import LargePlayerCard from '../LargePlayerCard'
import { render, screen } from '@testing-library/react'

const player = {
    id: 52,
    firstname: 'Novak',
    lastname: 'Djokovic',
    shortname: 'N.DJO',
    sex: 'M',
    country: {
        picture:
            'https://data.latelier.co/training/tennis_stats/resources/Serbie.png',
        code: 'SRB',
    },
    picture:
        'https://data.latelier.co/training/tennis_stats/resources/Djokovic.png',
    data: {
        rank: 2,
        points: 2542,
        weight: 80000,
        height: 188,
        age: 31,
        last: [1, 1, 1, 1, 1],
    },
}

describe('LargePlayerCard', () => {
    test('should renders player card with informations passed', () => {
        render(<LargePlayerCard player={player} />)
        expect(screen.getByAltText('NovakDjokovic')).toBeInTheDocument()
        expect(screen.getByAltText('SRB')).toBeInTheDocument()
        expect(screen.getByText('Novak')).toBeInTheDocument()
        expect(screen.getByText('Djokovic')).toBeInTheDocument()
        expect(screen.getByText('#2')).toBeInTheDocument()
        expect(screen.getByText('2542')).toBeInTheDocument()
        expect(screen.getAllByText('SRB')).toHaveLength(2)
    })
})
