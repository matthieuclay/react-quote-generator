import React, { Component } from "react";
import { render } from "react-dom";
import citations from "./citations";

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
        <p>
          {this.state.citation}
          <span>- {this.state.auteur}</span>
        </p>
        <button onClick={() => this.generateCitation()}>
        </button>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
