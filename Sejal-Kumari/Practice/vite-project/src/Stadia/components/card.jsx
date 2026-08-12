import {matches} from "../matches";

export default function card(){
    return (
        <>
        <div>
            <span>
            <p>HIGH DEMAND </p>
            </span>
            {/*Teams*/}
            <div>
                <div>
                {matches.team1}
                </div>
                <p>
                    {matches.city1}
                </p>
                <div><span>V/S</span></div>
                <div>
                {matches.team2}
                </div>
                <p>
                    {matches.city2}
                </p>
        </div>
        <span>{matches.date}</span>
        <span>{matches.venue}</span>
        <span>{matches.time}</span>
        </div>
        
        </>
    );
}