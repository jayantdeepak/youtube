import React from "react";
import Sidebar from "./sidebar";
import Maincontainer from "./maincontainer";
import { Outlet } from "react-router-dom";


const Body = () => {
  return (
    <div className="flex grid grid-flow-col">
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Body
