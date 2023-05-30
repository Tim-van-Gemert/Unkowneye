import axios from 'axios';
import { useEffect, useState } from 'react';
import NodeCache from 'node-cache';

// Create a shared cache instance
const cache = new NodeCache({ stdTTL: 60, checkperiod: 120 });
export default function useFetchPlayerData(playerId, token) {
  const [playerStats, setPlayerStats] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.pubg.com/shards/steam/players/${playerId}/seasons/lifetime`;

      let cachedData;
      if (playerId != null || playerId != undefined) {
        cachedData = cache.get(playerId.toString());
      }

      let playerData;

      if (cachedData) {
        playerData = cachedData;
      } else {
        try {
          const response = await axios.get(url, {
            headers: {
              Accept: 'application/vnd.api+json',
              Authorization: `Bearer ${token}`,
            },
          });

          playerData = response.data;
          cache.set(playerId.toString(), playerData);
        } catch (error) {
          console.log(error);
        }
      }

      setPlayerStats(playerData);
    };

    if (playerId) {
      fetchData();
    } else {
      setPlayerStats(null);
    }
  }, [playerId, token]);

  return { playerStats };
}
