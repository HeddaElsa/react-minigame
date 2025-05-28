import React from "react";
import { useEffect, useState } from "react";

const API = () => {
    const [hasfetched, setHasFetched] = useState(false);
    const [gameData, setGameData] = useState("");
    const [enterName, setEnterName] = useState("");
    const [dataCountry, setDataCountry] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch (`https://api.nationalize.io/?name=${enterName}`)
            const data = await response.json();
            setGameData(data);
            setDataCountry(data.country);
            console.log(data);
            console.log("country", data.country);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const generateGameData = () => {
        fetchData();
    }

        return (
        <div className="flex items-center justify-center h-screen bg-black">
            <div className="w-full max-w-xs">
                <h1 className="text-white text-3xl font-bold text-center mt-8 mb-8">Enter your name - 
                    <br/> see where you come from</h1>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <div className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <input 
                        type="text" 
                        className="inputField"
                        placeholder="Your name"
                        value={enterName}
                        onChange={(e) => {
                            const value = e.target.value;
                            setEnterName(value);
                            console.log("onchange värde", value);
                        }}
                    />
                </div>
                </div>
                <button onClick={generateGameData} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Predict your nationality</button>
                <ul>
                    {dataCountry.map((country, index) => (
                        <li key={index}>
                            Country: {country.country_id} - Probability: {country.probability}
                        </li>
                    ))}
                </ul>   
            </div>
            </div>
        </div>

        )
};

export default API