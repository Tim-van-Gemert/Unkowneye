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
        <div className="h-full font-thin grid grid-cols-3 gap-12 w-full p-5">
          {props.playersStats.map((player) => {
            const squadStats = player[0]?.data?.attributes?.gameModeStats?.['squad-fpp'] || {};
            const query = encodeURIComponent(JSON.stringify(player)); 
            return (
              <div key={player.id} className="  w-full gap-12 justify-center rounded-2xl items-top h-full flex flex-row p-5">
                {/* <img className="h-38 w-24" src="/player.png" alt="Player" /> */}
                <div className="flex flex-col gap-4">
                  <Link href={`/player?name=${player[1][1].toLowerCase()}`} className="font-primary flex flex-col">{player[1][1]}</Link>
                </div>
              </div>
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
