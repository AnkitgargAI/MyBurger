import React from "react";
import Aux from "../../hoc/Aux";
import "./Layout.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import ToolBar from "../Navigation/Toolbar/Toolbar";
const Layout = (props) => (
  <Aux>
    <ToolBar/>
    <SideDrawer/>
    {/* <div>ToolBar, SideDrawer, BackDrop</div> */}
    <main className="Content">{props.children}</main>
  </Aux>
);
export default Layout;

