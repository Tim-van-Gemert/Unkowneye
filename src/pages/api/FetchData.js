import axios from 'axios';
import { useEffect } from "react"

export default function FetchPlayer () {
  const token = process.env.NEXT_PUBLIC_PUBGAPI
    useEffect(()=> {
        const url = 'https://api.pubg.com/shards/steam/players?filter[playerNames]=TIMMAHHH'
        axios.get(url, {
            headers: {
              "Accept": "application/vnd.api+json",
              'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data)
        .then((data) => {
          console.log(data);
        })
      },[])
}



 