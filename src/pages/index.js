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
            return (
              <div key={player.id} className="  w-full gap-12 justify-center rounded-2xl items-top h-full flex flex-row p-5">
                {/* <img className="h-38 w-24" src="/player.png" alt="Player" /> */}
                <div className="flex flex-col gap-4">
                  <div className="font-primary flex flex-col">{player[1][1]}</div>
                  <div className="font-primary flex flex-col"></div>
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
