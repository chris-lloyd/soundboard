import * as React from "react";
import { api } from "../../api";
import Description from "./Description";
import useFetch from "../../hooks/useFetch";
import CardList from "../CardList";

const Dashboard = () => {
  const { data, loading, refresh } = useFetch(api.playlist);
  const [playing, setPlaying] = React.useState(false); // State to control playback


  return (
    <div className="flex flex-col w-full p-2">
      {data && !loading && (
        <>
          <Description refresh={refresh} setPlaying={setPlaying}/>

          <div className="flex flex-row w-full ">
            <CardList cards={data} playing={playing} setPlaying={setPlaying} refresh={refresh}/>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
