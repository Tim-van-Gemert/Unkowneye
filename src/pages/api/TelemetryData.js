import axios from 'axios';
import { useEffect } from 'react';

function TelemetryComponent({ matchData }) {
  useEffect(() => {
    const fetchTelemetryData = async () => {
      const telemetryId = matchData.data.relationships.assets.data[0].id;
      const telemetryDate = matchData.data.attributes.createdAt;
      let processedTelemetryDate = telemetryDate.replaceAll("-", "/").replaceAll(":", "/").replaceAll("T", "/").replaceAll("Z", "/");
      const telemetryURL = `https://telemetry-cdn.pubg.com/bluehole-pubg/steam/2023/05/31/19/38/ba4d66fb-ffea-11ed-b0d4-76ea7f09a5c2-telemetry.json`;
      console.log(telemetryURL);

      try {
        const telemetryResponse = await axios.get(telemetryURL, {
          headers: {
            Accept: 'application/vnd.api+json',
          },
        });
        console.log(telemetryResponse);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTelemetryData();
  }, [matchData]);

  return null; // Or you can return a loading indicator or any other JSX if needed
}

export default TelemetryComponent;


// WORKING LINK:
// https://telemetry-cdn.pubg.com/bluehole-pubg/steam/2023/05/31/19/38/ba4d66fb-ffea-11ed-b0d4-76ea7f09a5c2-telemetry.json

// TEMP LINK:
// https://telemetry-cdn.pubg.com/bluehole-pubg/steam/2023/05/27/20/41/53${telemetryId}-telemetry.json