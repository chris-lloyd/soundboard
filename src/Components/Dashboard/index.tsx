import * as React from "react";
import { api } from "../../api";
import Description from "./Description";
import useFetch from "../../hooks/useFetch";
import CardList from "../CardList";

const Dashboard = () => {
  const { data, loading } = useFetch(api.playlist);

  console.log({ data });

  return (
    <div className="flex flex-col w-full p-4">
      <Description />

      <div className="flex flex-row w-full gap-2 max-h-[80vh]">
        {/* <div className="flex-1 bg-blue-500 p-4 mb-4 rounded-lg">Item 1</div>
        <div className="flex-1 bg-green-500 p-4 mb-4 rounded-lg">Item 2</div>
        <div className="flex-1 bg-green-500 p-4 mb-4 rounded-lg">Item 2</div> */}
        <CardList />
      </div>
    </div>
  );
};

export default Dashboard;
