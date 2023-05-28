import axios from 'axios';
import { useEffect, useState } from "react"

export default function useFetchAllPlayers(players) {
  const token = process.env.NEXT_PUBLIC_PUBGAPI;
  const [playersStats, setPlayersStats] = useState([]);
  const [intialLoad, setIntialLoad] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const tempArr = [];

      for (let i = 0; i < players.length; i++) {
        const player = players[i];
        console.log(player)
        const url = `https://api.pubg.com/shards/steam/players/${player}/seasons/lifetime`;
        try {
          const response = await axios.get(url, {
            headers: {
              "Accept": "application/vnd.api+json",
              'Authorization': `Bearer ${token}`
            }
          });
          const playerData = response.data;
          console.log(playerData)
          tempArr.push(playerData);
        } catch (error) {
          console.log(error);
        }
      }

      setPlayersStats(tempArr);
    };

    const fetchDataWithDelay = async () => {
      await fetchData();
      await delay(60000); // Delay between API calls
      fetchDataWithDelay();
    };
 
    if (!intialLoad) {
        fetchDataWithDelay();
        setIntialLoad(true)
    }

    return () => {
      // Cleanup function
    };
  }, [players, token]);

  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return { playersStats, setPlayersStats };
}
