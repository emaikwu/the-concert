import React, { Component } from 'react';
import "./resources/styles.css";
import "./resources/styles.scss";
import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";
import Home from './components/main/Index';
import Venue from './components/venue';
import Highlights from './components/highlights';
import Tickets from './components/tickets';
import Location from './components/location'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Venue />
        <Highlights />
        <Tickets/>
        <Location/>
        <Footer/>
      </div>
    );
  }
}

export default App;
