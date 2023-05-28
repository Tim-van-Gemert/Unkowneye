import axios from 'axios';
import { useEffect } from "react"

export default function FetchAllPLayers(props) {
  const token = process.env.NEXT_PUBLIC_PUBGAPI
    useEffect(()=> {
        // TIMMAHHH account.bf0458c4350a4f58acfac101b3bd1df2
        // JustDaanGames account.56162efa45c846cd98eae1a741b338b7
        const url = "https://api.pubg.com/shards/steam/players?filter[playerNames]=TIMMAHHH,JustDaanGames"
        axios.get(url, {
            headers: {
              "Accept": "application/vnd.api+json",
              'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data)
        .then((data) => {
          GetPlayerData(data.data, props.setPlayersStats)
        })
      },[])
}

export function GetPlayerData(players, sendDataToPage) {
  const token = process.env.NEXT_PUBLIC_PUBGAPI
  const tempArr = []
  setTimeout(() => {
    players.map((player)=>{
      console.log(player.id)
          const url = `https://api.pubg.com/shards/steam/players/${player.id}/seasons/lifetime`
          axios.get(url, {
              headers: {
                "Accept": "application/vnd.api+json",
                'Authorization': `Bearer ${token}`
              }
          }).then(response => response.data)
          .then((playerdata) => {
            tempArr.push(playerdata)
          })
    })
    sendDataToPage(tempArr)
  }, "1000");
}


 