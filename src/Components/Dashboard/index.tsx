import * as React from "react";
import { api } from "../../api";
import Description from "./Description";

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full p-4">
      <Description />

      <div className="flex-1 bg-blue-500 p-4 mb-4 rounded-lg">Item 1</div>
      <div className="flex-1 bg-green-500 p-4 mb-4 rounded-lg">Item 2</div>
      <div className="flex-1 bg-red-500 p-4 rounded-lg">Item 3</div>
    </div>
  );
};

export default Dashboard;
