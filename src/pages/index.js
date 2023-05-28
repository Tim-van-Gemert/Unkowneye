import { useEffect, useState } from "react";
import useFetchAllPlayers from "./api/useFetchAllPlayers";

export default function Home() {
  const { playersStats } = useFetchAllPlayers(['account.bf0458c4350a4f58acfac101b3bd1df2', 'account.56162efa45c846cd98eae1a741b338b7']);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    if (playersStats.length > 0) {
      setIsDataFetched(true);
    }
  }, [playersStats]);

  if (isDataFetched) {
    return (
      <>
        <div className="h-full font-thin grid grid-cols-4 gap-12 w-full p-5">
          {playersStats.map((player) => {
            const squadStats = player?.data?.attributes?.gameModeStats?.['squad-fpp'] || {};
            return (
              <div key={player.id} className="border-solid border w-full gap-12 justify-center items-top h-full flex flex-row p-5">
                <img className="h-38 w-24" src="/player.png" alt="Player" />
                <div className="flex flex-col gap-4">
                  <div className="font-primary flex flex-col">PLAYER UNKNOWN</div>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-4 justify-start items-center flex-row">
                      <div className="font-primary">Wins:</div>
                      <div className="">{squadStats.wins}</div>
                    </div>
                    <div className="flex gap-4 justify-start items-center flex-row">
                      <div className="font-primary">Kills:</div>
                      <div className="">{squadStats.kills}</div>
                    </div>
                    <div className="flex gap-4 justify-start items-center flex-row">
                      <div className="font-primary">Assists:</div>
                      <div className="">{squadStats.assists}</div>
                    </div>
                  </div>
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
