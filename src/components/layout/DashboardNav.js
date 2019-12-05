import React from "react";
import Sidebar from "react-sidebar";
import SidebarContent from "./SidebarContent";

class DashboardNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar
        sidebar={<SidebarContent />}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >

        <div className="p-3 blue-gradient text-white mb-5">
          <span className=" mr-2 h4 font-weight-bold">Logo</span>
          <i onClick={() => this.onSetSidebarOpen(true)} className="fa fa-align-right h4">
          </i>

          <span className="float-right">
          <span className=" pr-2 font-weight-bold">Balance: $40,000 </span>
            <i className="fa h4 fa-fw pr-2 fa-envelope" />
            <i className="fa h4 fa-fw fa-bell" />
            
          </span>
        </div>

      </Sidebar>
    );
  }
}

export default DashboardNav;