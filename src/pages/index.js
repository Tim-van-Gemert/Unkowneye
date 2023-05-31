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
        <h1 className="font-primary font-thin text-[40px] sm:text-[50px]  pb-6 text-center lg:text-start lg:p-5 ">UNKNOWNEYE</h1>
        <div className="h-full font-thin grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10  w-full  lg:p-5">
          {props.players.map((player) => {
            const playerId = player[0];
            const playerName = player[1];

            const squadStats = player[2]?.attributes?.gameModeStats?.['squad-fpp'] || {};

            const query = new URLSearchParams({ playerName }).toString().toLowerCase();

            return (
              <Link href={{ pathname: '/stats', query }} key={playerName} className=" w-full hover:-translate-y-2 items-end  transition-all rounded-xl  bg-[#9D9D9D20] flex flex-col h-fit relative ">
                <div className="flex flex-col  w-full  z-20 p-3 -mb-4 md:-mb-8 lg:-mb-14  pl-6 gap-3">
                  <div className="font-primary uppercase  text-[28px] flex flex-col">{playerName}</div>
                  <div className='sm:text-[8px] text-[6px] font-primary -mt-4 text-[#9D9D9D] uppercase'>{playerId}</div>    
                </div>
                <img className="h-2/3 w-2/3 sm:h-1/2  sm:w-1/2 z-10" src="/player.png" alt="Player" />
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
