import axios from 'axios';
import { useEffect, useState } from 'react';

export default function FetchMatchData(token) {
  const  FetchMap = async () => {
    const url = `https://api.pubg.com/shards/steam/matches/edfb15f5-6358-400d-ba6b-6d6bbdcca438`;
    try {
        const response = await axios.get(url, {
          headers: {
            Accept: 'application/vnd.api+json',
            Authorization: `Bearer ${token}`,
          },
        });
          console.log(response);
          const telemetryId = response.data.data.relationships.assets.data[0].id
          const telemetryDate = response.data.data.attributes.createdAt;
          let processedTelemetryDate = telemetryDate.replaceAll("-", "/").replaceAll(":", "/").replaceAll("T", "/").replaceAll("Z", "/");
          const telemetryURL = `https://telemetry-cdn.pubg.com/bluehole-pubg/steam/2023/05/27/20/41/53${telemetryId}-telemetry.json`;
      //     console.log(telemetryURL)
      //     try {
      //       const telemetryesponse = await axios.get(telemetryURL, {
      //         headers: {
      //           Accept: 'application/vnd.api+json',
      //         },
      //       });
      //       console.log(telemetryesponse);
      //     } catch (error) {
      //       console.log(error);
      //   } 
      } catch (error) {
        console.log(error);
      }
  }
  FetchMap()
}

// WORKING LINK:
// https://telemetry-cdn.pubg.com/bluehole-pubg/steam/2023/05/31/19/38/ba4d66fb-ffea-11ed-b0d4-76ea7f09a5c2-telemetry.json