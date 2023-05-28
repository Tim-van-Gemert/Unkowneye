import axios from 'axios';
import { useEffect } from "react"

export default function FetchPlayerStats (props) {
  const token = process.env.NEXT_PUBLIC_PUBGAPI
    useEffect(()=> {
        const url = "https://api.pubg.com/shards/steam/players/account.bf0458c4350a4f58acfac101b3bd1df2/seasons/lifetime"
        axios.get(url, {
            headers: {
              "Accept": "application/vnd.api+json",
              'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data)
        .then((data) => {
          props.setPlayerStats(data)
        })
      },[])
}



 