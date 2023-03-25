import '../styles/SearchBar.scss'
interface SearchBarProps {
    inputValue: string
    setInputValue: React.Dispatch<React.SetStateAction<string>>
}
export default function SearchBar({
    inputValue,
    setInputValue,
}: SearchBarProps) {
    return (
        <input
            type="text"
            placeholder="Rechercher un joueur"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className="search-input"
        />
    )
}
