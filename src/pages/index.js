import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home(props) {
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    if (props.players.length > 0) {
      setIsDataFetched(true);
    }
  }, [props.players]);

  if (isDataFetched) {
    return (
      <>
        <h1 className="font-primary font-thin text-[50px]  pb-6 text-center lg:text-start lg:p-5 ">UNKNOWNEYE</h1>
        <div className="h-full font-thin grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10  w-full  lg:p-5">
          {props.players.map((player) => {
            const playerId = player[0];
            const playerName = player[1];

            const squadStats = player[2]?.attributes?.gameModeStats?.['squad-fpp'] || {};

            const query = new URLSearchParams({ playerName }).toString().toLowerCase();

            return (
              <Link href={{ pathname: '/stats', query }} key={playerName} className=" w-full hover:-translate-y-2 transition-all rounded-xl bg-[#9D9D9D20]  h-full relative ">
                <img className="h-full w-full z-10" src="/player.png" alt="Player" />
                <div className="flex flex-col absolute left-5 top-2 z-20 gap-3">
                  <div className="font-primary uppercase text-[28px] flex flex-col">{playerName}</div>
                  <div className='text-[8px] font-primary -mt-4 text-[#9D9D9D] uppercase'>{playerId}</div>    
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
