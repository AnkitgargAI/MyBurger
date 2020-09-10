import React from "react";
import BackDrop from "../../UI/BackDrop/BackDrop";
import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Aux from "../../../hoc/Aux";
import "./SideDrawer.css";
const SideDrawer = (props) => {
  let attachedClass = ["SideDrawer", "Close"];
  if (props.modalOpen) {
    attachedClass = ["SideDrawer", "Open"];
  }
  return (
    <Aux>
      <BackDrop show={props.modalOpen} clicked={props.modalClosed} />

      <div className={attachedClass.join(' ')}>
        <div className="Logo">
          <Logo />
        </div>
        <nav>
          <NavigationItems></NavigationItems>
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
