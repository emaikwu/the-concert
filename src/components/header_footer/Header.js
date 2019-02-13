import React, {Component} from 'react';
import {AppBar, Toolbar, IconButton } from "@material-ui/core";
import {MdMenu} from "react-icons/md";
import SideDrawer from "./SideDrawer";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      side: "right",
      open: false,
      showHeader: false
    }
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.toggleHeaderBg = this.toggleHeaderBg.bind(this);
  }

  toggleDrawer() {
    this.setState(prevState => ({
      open: prevState.open === false ? true : false
    }))
  }

  toggleHeaderBg() {
    window.onscroll = () => {
      if(window.scrollY > 90) {
        this.setState({
          showHeader: true
        });
      } else {
        this.setState({
          showHeader: false
        });
      }
    }
  }

  componentDidMount() {
    this.toggleHeaderBg();
  }

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.showHeader ? "#2f2f2f" : "transparent",
          boxShadow: "none",
          padding: "10px 0"
        }}
        >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">JOHN LEGEND</div>
            <div className="font_righteous header_logo_title">The LEGENDary concert</div>
          </div>
          <IconButton
            aria-label="menu"
            color="inherit"
            onClick={this.toggleDrawer}
          >
            <MdMenu/>
          </IconButton>
          <SideDrawer
            side={this.state.side}
            open={this.state.open}
            onClose={this.toggleDrawer}
            
          />
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header
