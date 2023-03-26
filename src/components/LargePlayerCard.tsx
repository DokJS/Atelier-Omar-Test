import { Player } from '../models/types'
import '../styles/LargePlayerCard.scss'
interface LargePlayerCardProps {
    player: Player
}
export default function LargePlayerCard({ player }: LargePlayerCardProps) {
    const { firstname, lastname, data, country, picture } = player
    const { code, picture: countryFlag } = country
    const { rank, points, age, weight, height } = data
    return (
        <div className="player-card-expanded">
            <section className="bottom player-card-expanded__container">
                <div className="player-card-expanded__container--col">
                    <img
                        src={picture}
                        alt={firstname + lastname}
                        className="player-picture"
                    />
                </div>
                <div className="player-card-expanded__container--col">
                    <div className="header">
                        <div className="header__col">
                            <div className="player-name">
                                <div className="player-name__firstname">
                                    {firstname}
                                </div>
                                <div className="player-name__lastname">
                                    {lastname}
                                </div>
                            </div>
                        </div>
                        <div className="header__col flag">
                            <div className="flag__picture">
                                <img src={countryFlag} alt={code} />
                            </div>
                            <div className="flag__code">{code}</div>
                        </div>
                    </div>
                    <div className="player-info-container">
                        <div className="col">
                            <div className="col__container">
                                <div className="col__container__title">
                                    RANK
                                </div>
                                <div className="col__container__subtitle">
                                    {rank}
                                </div>
                            </div>
                            <div className="col__container">
                                <div className="col__container__title">
                                    POINTS
                                </div>
                                <div className="col__container__subtitle">
                                    {points}
                                </div>
                            </div>
                            <div className="col__container">
                                <div className="col__container__title">
                                    COUNTRY
                                </div>
                                <div className="col__container__subtitle">
                                    {code}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="col__container">
                                <div className="col__container__title">AGE</div>
                                <div className="col__container__subtitle">
                                    {age}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="col__container">
                                <div className="col__container__title">
                                    WEIGHT
                                </div>
                                <div className="col__container__subtitle">
                                    {weight.toString().slice(0, 2)} kg
                                </div>
                            </div>
                            <div className="col__container">
                                <div className="col__container__title">
                                    HEIGHT
                                </div>
                                <div className="col__container__subtitle">
                                    {height} cm
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
