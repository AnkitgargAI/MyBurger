import React from "react";
import "./Toolbar.css"
import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle"
const Toolbar = (props) => {
  return (
    <header className="Toolbar">
     <DrawerToggle clicked={props.drawerToggleClicked}></DrawerToggle>
          <Logo height="80%"/>
      <nav className="DesktopOnly">
          <NavigationItems/>
      </nav>
    </header>
  );
};

export default Toolbar;
