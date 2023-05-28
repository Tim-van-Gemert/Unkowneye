import { useEffect, useState } from "react"
import FetchPlayer from "./api/FetchData"
import axios from "axios"


export default function Home() {
    const [PlayerStats, setPlayerStats] = useState()
    console.log(PlayerStats)

    if (PlayerStats != undefined) {
    return ( 
        <>
            <div className="h-full font-thin grid grid-cols-4 w-full p-5">
                <div className="border-solid border w-full gap-6 h-full flex flex-row p-5">
                    <div className="font-primary flex flex-col">TIMMAHHH</div>
                    <div className="flex flex-col  gap-2">
                        <div className="flex  gap-4  justify-start items-center flex-row">
                            <div className="font-primary ">Wins:</div>
                            <div className=" "> {PlayerStats.data.attributes.gameModeStats['squad-fpp'].wins}</div>
                        </div>
                        <div className="flex  gap-4 justify-start items-center flex-row">
                            <div className="font-primary ">Kills:</div>
                            <div className=" "> {PlayerStats.data.attributes.gameModeStats['squad-fpp'].kills}</div>
                        </div>
                        <div className="flex gap-4  justify-start items-center flex-row">
                            <div className="font-primary ">Assists:</div>
                            <div className=" "> {PlayerStats.data.attributes.gameModeStats['squad-fpp'].assists}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    } else {
        return (
            <>
            <FetchPlayer setPlayerStats={setPlayerStats}/>
            <div>loading...</div>
            </>
            
        )
    }
}
