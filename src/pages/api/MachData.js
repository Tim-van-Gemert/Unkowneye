import axios from 'axios';
import { useEffect, useState } from 'react';
import TelemetryComponent from '../api/TelemetryData';

export default function FetchMatchData({ token }) {
  const [matchData, setMatchData] = useState(null);

  useEffect(() => {
    const fetchMatchData = async () => {
      const url = `https://api.pubg.com/shards/steam/matches/edfb15f5-6358-400d-ba6b-6d6bbdcca438`;
      try {
        const response = await axios.get(url, {
          headers: {
            Accept: 'application/vnd.api+json',
            Authorization: `Bearer ${token}`,
          },
        });
        setMatchData(response.data); // Save the match data response
      } catch (error) {
        console.log(error);
      }
    };
    fetchMatchData();
  }, [token]);

  return (
    <div>
      {matchData && <TelemetryComponent matchData={matchData} />}
    </div>
  );
}
