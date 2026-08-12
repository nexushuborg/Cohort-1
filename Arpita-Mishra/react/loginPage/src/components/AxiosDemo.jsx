import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosDemo = () => {
  const [heroes, setHeroes] = useState([]);

  // State for adding a new hero (POST)
  const [newHeroName, setNewHeroName] = useState("");
  const [newHeroPower, setNewHeroPower] = useState("");

  // The base URL for our local backend
  const API_URL = "http://localhost:5000/api/heroes";

  // ==========================================
  // 1. GET: Read Data
  // ==========================================
  const fetchHeroes = () => {
    console.log("Fetching heroes from backend...");
    axios.get(API_URL)
        .then((response)=>{
            setHeroes(response.data)
        })
        .catch((error)=>console.error("Enter Getting heroes from simulated DB"))
  };

  // Run GET when the component first loads
  useEffect(() => {
    fetchHeroes();
  }, []);

  // ==========================================
  // 2. POST: Create Data
  // ==========================================
  const handleAddHero = (e) => {
    console.log("Adding new heros...");
    e.preventDefault();
    if(!newHeroName || !newHeroPower){
        return alert("hero name or hero power not selected")
    }
    const newHerodata = {
        name:newHeroName,
        power:newHeroPower
    }

    axios.post(API_URL,newHerodata)
        .then((response)=>{
            console.log(response.data)
            setNewHeroName("")
            setNewHeroPower("")
            fetchHeroes()
        })
        .catch((error)=>console.error("Enter Adding heroes to simulated DB"))
  };

  // ==========================================
  // 3. PUT: Update Data
  // ==========================================
  const handleUpdateHero = (id) => {
    console.log("Updating heros...");
    const newPower = prompt("Enter the new upgraded power")
    if(!newPower){
        return alert("power not stated")
    }
    axios.put(`${API_URL}/${id}`,{power:newPower})
        .then((response)=>{
            console.log("New power",response.data);
            fetchHeroes()
        })
        .catch((error)=>console.error("Error updating power of the superhero"))
  };

  // ==========================================
  // 4. DELETE: Remove Data
  // ==========================================
  const handleDeleteHero = (id) => {
    if(!window.confirm("Are you sure you want to delete this particular SuperHero?????")){
        return;
    }
    console.log("Deleting hero...");
    axios.delete(`${API_URL}/${id}`)
        .then((response)=>{
            console.log("SuperHero deleted");
            fetchHeroes()
        })
        .catch((error)=>console.error("Error updating power of the superhero"))
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10 font-sans">
      <h1 className="text-4xl font-extrabold text-blue-400 mb-8 text-center">
        🦸‍♂️ Superhero Axios Playground
      </h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT COLUMN: Add Hero Form (POST) */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-xl">
          <h2 className="text-2xl font-bold text-green-400 mb-4 border-b border-gray-700 pb-2">
            1. POST (Create)
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Add a brand new hero to the database!
          </p>

          <form onSubmit={handleAddHero} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Hero Name (e.g. Thor)"
              className="p-3 bg-gray-700 rounded text-white outline-none focus:ring-2 focus:ring-green-400"
              value={newHeroName}
              onChange={(e) => setNewHeroName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Super Power (e.g. God of Thunder)"
              className="p-3 bg-gray-700 rounded text-white outline-none focus:ring-2 focus:ring-green-400"
              value={newHeroPower}
              onChange={(e) => setNewHeroPower(e.target.value)}
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 rounded transition"
            >
              Send POST Request 🚀
            </button>
          </form>
        </div>

        {/* RIGHT COLUMN: Display Heroes (GET, PUT, DELETE) */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-xl">
          <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
            <h2 className="text-2xl font-bold text-blue-400">2. GET (Read)</h2>
            <button
              onClick={fetchHeroes}
              className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
            >
              Refresh List 🔄
            </button>
          </div>

          <ul className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {heroes.map((hero) => (
              <li
                key={hero.id}
                className="bg-gray-700 p-4 rounded flex flex-col gap-3 border border-gray-600"
              >
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {hero.name}{" "}
                    <span className="text-gray-400 text-sm">
                      #id: {hero.id}
                    </span>
                  </h3>
                  <p className="text-gray-300">
                    Power: <span className="text-yellow-400">{hero.power}</span>
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleUpdateHero(hero.id)}
                    className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black text-sm font-bold py-2 rounded"
                  >
                    PUT (Update) ✏️
                  </button>
                  <button
                    onClick={() => handleDeleteHero(hero.id)}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white text-sm font-bold py-2 rounded"
                  >
                    DELETE 🗑️
                  </button>
                </div>
              </li>
            ))}

            {heroes.length === 0 && (
              <p className="text-gray-400 text-center py-4">
                No heroes left in the database! Add some!
              </p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AxiosDemo;