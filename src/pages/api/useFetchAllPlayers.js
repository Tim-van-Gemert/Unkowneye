import axios from 'axios';
import { useEffect, useState } from "react"
import NodeCache from 'node-cache';

export default function useFetchAllPlayers(players) {
  // const mysql = require('mysql');
  const token = process.env.NEXT_PUBLIC_PUBGAPI;
  const [playersStats, setPlayersStats] = useState([]);
  const [initialLoad, setInitialLoad] = useState(false);
  const cache = new NodeCache({ stdTTL: 60, checkperiod: 120 }); // Create cache instance

  useEffect(() => {
    const fetchData = async () => {
      const tempArr = [];

      for (let i = 0; i < players.length; i++) {
        const player = players[i];
        console.log(player[0])
        const url = `https://api.pubg.com/shards/steam/players/${player[0]}/seasons/lifetime`;

        const cachedData = cache.get(player[0]);
        let playerData;

        if (cachedData) {
          playerData = cachedData;
        } else {
          try {
            const response = await axios.get(url, {
              headers: {
                "Accept": "application/vnd.api+json",
                'Authorization': `Bearer ${token}`
              }
            });
            playerData = response.data;
            cache.set(player[0], playerData); // Store the response in the cache
      
            // Store data in the SQL database
            const sql = "INSERT INTO pubg_data (player_id, data) VALUES (?, ?)";
            // await database.query(sql, [player[0], JSON.stringify(playerData)]);
          } catch (error) {
            console.log(error);
          }
        }

        tempArr.push([playerData, player]);
      }

      setPlayersStats(tempArr);
    };

    const fetchDataWithDelay = async () => {
      await fetchData();
      await delay(60000); // Delay between API calls
      fetchDataWithDelay();
    };

    if (!initialLoad) {
      fetchDataWithDelay();
      setInitialLoad(true);
    }

    return () => {
      // No cache clearing needed in this case
    };
  }, [players, token]);

  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return { playersStats, setPlayersStats };
}



export function GetDataFromDB () {
  const getStoredData = async () => {
    const sql = "SELECT player_id, data FROM pubg_data";
    const results = await database.query(sql);
  
    // Process the retrieved data
    const storedData = results.map((row) => ({
      player_id: row.player_id,
      data: JSON.parse(row.data),
    }));
  
    console.log(storedData);
  };
  
  // Call the function to retrieve data
  getStoredData();
  
}


export function AddNewPlayer() {
  const token = process.env.NEXT_PUBLIC_PUBGAPI;

  useEffect(() => {
    const fetchData = async () => {
          const url = `https://api.pubg.com/shards/steam/players?filter[playerNames]=Ghostdragon2005`;
          let newPlayerData;

            try {
              const response = await axios.get(url, {
                headers: {
                  "Accept": "application/vnd.api+json",
                  'Authorization': `Bearer ${token}`
                }
              });
              newPlayerData = response.data;
              console.log(newPlayerData)
            } catch (error) {
              console.log(error);
            }
    }
    fetchData()
  }, []);
}