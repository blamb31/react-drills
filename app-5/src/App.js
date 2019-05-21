import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Image from './Components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image imgUrl="https://cdn.mos.cms.futurecdn.net/ZhiVbLec8nXmzWqMhfMxGj.jpg" />
      </div>
    );
  }
}

export default App;
