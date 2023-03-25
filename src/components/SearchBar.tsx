interface SearchBarProps {
    inputValue: string
    setInputValue: React.Dispatch<React.SetStateAction<string>>
}
export default function SearchBar({
    inputValue,
    setInputValue,
}: SearchBarProps) {
    return <div>searchBar</div>
}
