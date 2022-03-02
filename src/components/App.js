import React, { Component } from "react";
import quotes from "../quotes";
import Quote from "./Quote";

class App extends Component {
  state = {};

  componentWillMount() {
    this.generateQuote();
  }

  generateQuote = () => {
    const keysArray = Object.keys(quotes);
    const randomKey = keysArray[Math.floor(Math.random() * keysArray.length)];

    if (this.state.quote === quotes[randomKey].quote) {
      this.generateQuote();
      return;
    }

    this.setState(quotes[randomKey]);
  };

  render() {
    return (
      <div id="app">
        <h1>Quote Generator</h1>
        <Quote details={this.state} />
        <button onClick={() => this.generateQuote()}>
          <span class="button_top">Another quote!</span>
        </button>
      </div>
    );
  }
}

export default App;
