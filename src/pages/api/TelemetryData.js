import axios from 'axios';
import { useEffect, useState } from 'react';
import DrawMatch from '../../components/drawMatch'; // Import the drawMatch component

function TelemetryComponent({ matchData }) {
  const [telemetryData, setTelemetryData] = useState(null);

  useEffect(() => {
    const fetchTelemetryData = async () => {
      const telemetryId = matchData.data.relationships.assets.data[0].id;
      const telemetryDate = matchData.data.attributes.createdAt;
      let processedTelemetryDate = telemetryDate.replaceAll("-", "/").replaceAll(":", "/").replaceAll("T", "/").replaceAll("Z", "/");
      const telemetryURL = `https://telemetry-cdn.pubg.com/bluehole-pubg/steam/2023/05/31/19/38/ba4d66fb-ffea-11ed-b0d4-76ea7f09a5c2-telemetry.json`;

      try {
        const telemetryResponse = await axios.get(telemetryURL, {
          headers: {
            Accept: 'application/vnd.api+json',
          },
        });

        setTelemetryData(telemetryResponse.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTelemetryData();
  }, [matchData]);


  return (
    <div>
      {telemetryData ? (
        <DrawMatch telemetryData={telemetryData} /> // Pass the parsed telemetry data to the drawMatch component
      ) : (
        'Loading Map...' // Render a loading indicator while waiting for the telemetry data to be fetched and parsed
      )}
    </div>
  );
}

export default TelemetryComponent;



// WORKING LINK:
// https://telemetry-cdn.pubg.com/bluehole-pubg/steam/2023/05/31/19/38/ba4d66fb-ffea-11ed-b0d4-76ea7f09a5c2-telemetry.json

// TEMP LINK:
// https://telemetry-cdn.pubg.com/bluehole-pubg/steam/2023/05/27/20/41/53${telemetryId}-telemetry.json