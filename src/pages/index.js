import { useEffect, useState } from "react"
import FetchPlayer from "./api/FetchData"
import axios from "axios"


export default function Home() {
    const [PlayersStats, setPlayersStats] = useState()
    console.log(PlayersStats)

    if (PlayersStats != undefined) {
    return ( 
        <>
            <div className="h-full font-thin grid grid-cols-4 gap-12  w-full p-5">
            {
                PlayersStats.map((player)=>{
                    return (
                        <>
                        <div className="border-solid border w-full gap-12 justify-center items-center h-full flex flex-row p-5">
                            <img className="h-38 w-24" src="/player.png"></img>
                            <div className="flex flex-col gap-4">
                                <div  className="font-primary flex flex-col">TIMMAHHH</div>
                                <div className="flex flex-col  gap-2">
                                    <div className="flex  gap-4  justify-start items-center flex-row">
                                        <div className="font-primary ">Wins:</div>
                                        <div className=" "> {player.data.attributes.gameModeStats['squad-fpp'].wins}</div>
                                    </div>
                                    <div className="flex  gap-4 justify-start items-center flex-row">
                                        <div className="font-primary ">Kills:</div>
                                        <div className=" "> {player.data.attributes.gameModeStats['squad-fpp'].kills}</div>
                                    </div>
                                    <div className="flex gap-4  justify-start items-center flex-row">
                                        <div className="font-primary ">Assists:</div>
                                        <div className=" "> {player.data.attributes.gameModeStats['squad-fpp'].assists}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                })
            }
            </div>
        </>
    )
    } else {
        return (
            <>
            <FetchPlayer setPlayersStats={setPlayersStats} players={['TIMMAHHH', 'JustDaanGames']}/>
            <div>loading...</div>
            </>
            
        )
    }
}
