export const endpoints = {
    getPlayersData: () => {
        return 'https://data.latelier.co/training/tennis_stats/headtohead.json'
    },
    getCountryName: (countryCode: string) => {
        return `https://restcountries.com/v3.1/alpha/${countryCode}`
    },
}
