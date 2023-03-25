import SearchBar from '../SearchBar'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('SearchBar', () => {
    it('should render a search bar', () => {
        render(<SearchBar inputValue="value" setInputValue={() => {}} />)
        expect(
            screen.getByPlaceholderText('Rechercher un joueur')
        ).toBeInTheDocument()
    })
    it('should call the function when the user types', () => {
        const setInputValue = jest.fn()
        render(<SearchBar inputValue="value" setInputValue={setInputValue} />)
        userEvent.type(
            screen.getByPlaceholderText('Rechercher un joueur'),
            'test'
        )
        expect(setInputValue).toHaveBeenCalledTimes(4)
    })
})
