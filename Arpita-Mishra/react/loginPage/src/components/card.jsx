import { matches } from "../data/matches";

function MatchCard({ match }) {
  return (
    <div className="card bg-base-200 shadow-md p-4 mb-4">
      <span className="badge badge-accent">{match.demand}</span>

      {/* Teams */}
      <div className="flex flex-col justify-between items-center my-3">
        <div className="text-center">
          <div className="text-lg font-bold">{match.team1}</div>
          <p className="text-sm">{match.city1}</p>
        </div>

        <span className="text-xl font-bold">vs</span>

        <div className="text-center">
          <div className="text-lg font-bold">{match.team2}</div>
          <p className="text-sm">{match.city2}</p>
        </div>
      </div>

      <div className="flex justify-between text-sm mt-3">
        <span>{match.date}</span>
        <span>{match.venue}</span>
        <span className="font-semibold">{match.price}</span>
      </div>
    </div>
  );
}

export default function Card() {
  return (
    <div className="container mx-auto p-4">
      {matches.map((match, index) => (
        <MatchCard key={index} match={match} />
      ))}
    </div>
  );
}