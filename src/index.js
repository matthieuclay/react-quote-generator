import React, { Component } from "react";
import { render } from "react-dom";
import citations from "./citations";
import "./index.scss";

class App extends Component {
  state = {};

  generateCitation = () => {
    const keysArray = Object.keys(citations);
    const randomKey = keysArray[Math.floor(Math.random() * keysArray.length)];
    this.setState(citations[randomKey]);
  };

  render() {
    return (
      <div id="app">
        <h1>Quote Generator</h1>
        <p>
          {this.state.citation}
          <span>— {this.state.auteur}</span>
        </p>
        <button onClick={() => this.generateCitation()}>
          <span class="button_top">Une autre citation !</span>
        </button>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
