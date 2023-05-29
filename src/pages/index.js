import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home(props) {
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    if (props.playersStats.length > 0) {
      setIsDataFetched(true);
    }
  }, [props.playersStats]);

  if (isDataFetched) {
    return (
      <>
        <div className="h-full font-thin grid grid-cols-3 gap-10 w-full p-5">
          {props.playersStats.map((player) => {
            const squadStats = player[0]?.data?.attributes?.gameModeStats?.['squad-fpp'] || {};
            const query = encodeURIComponent(JSON.stringify(player)); 
            return (
                <Link href={`/player?name=${player[1][1].toLowerCase()}`} key={player.id} className=" w-full rounded-xl bg-[#9D9D9D20]  h-full relative ">
                    <img className="h-full w-full z-10" src="/player.png" alt="Player" />
                    <div className="flex flex-col absolute left-5 top-2 z-20 gap-3">
                        <div className="font-primary uppercase text-[28px] flex flex-col">{player[1][1]}</div>
                        <div className='text-[8px] font-primary -mt-4 text-[#9D9D9D] uppercase'>{player[1][0]}</div>    
                    </div>
                </Link>
            );
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="text-black">
          Loading GoonSquad...
        </div>
      </>
    );
  }
}
