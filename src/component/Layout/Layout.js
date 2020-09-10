import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import "./Layout.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import ToolBar from "../Navigation/Toolbar/Toolbar";

class Layout extends Component {
  state = {
    showSideDrawer: true,
  };

  SideDrawerModalHandler = () => {
    let oldShowStatus = this.state.showSideDrawer;
    this.setState({ showSideDrawer: !oldShowStatus });
  };
  // sideDrawerToggleHandler() {}

  render() {
    return (
      <Aux>
        <ToolBar drawerToggleClicked={this.SideDrawerModalHandler} />
        {this.state.showSideDrawer ? (
          <SideDrawer
            modalOpen={this.SideDrawerModalHandler}
            modalClosed={this.SideDrawerModalHandler}
          />
        ) : null}

        {/* <div>ToolBar, SideDrawer, BackDrop</div> */}
        <main className="Content">{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;
