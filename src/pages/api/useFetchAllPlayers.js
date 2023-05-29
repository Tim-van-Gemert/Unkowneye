import axios from 'axios';
import { useEffect, useState } from "react"
import NodeCache from 'node-cache';

export default function useFetchAllPlayers(players) {
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
