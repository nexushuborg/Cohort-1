import {match} from "../data/match"
export default function Card(){
    return(
        <div>
            <span>
                {match.Demand}
            </span>
            {/* Teams */}
            <div>
                <div>

                    <div>
                        {match.team1}
                    </div>
                    <p>
                        {match.city1}
                    </p>
                </div>
                <span>VS</span>
                <div>
                    <div>
                        {match.team2}
                    </div>
                    <p>
                        {match.city2}
                    </p>

                </div>
            </div>
            <div>
                <span>{match.date}</span>
                <span>{match.venue}</span>
                <span>{match.time}</span>
            </div>
        </div>

    )
}