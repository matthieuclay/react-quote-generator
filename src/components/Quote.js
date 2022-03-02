import React from "react";

class Quote extends React.Component {
  render() {
    return (
      <p>
        {this.props.details.quote}
        <span>— {this.props.details.author}</span>
      </p>
    );
  }
}

export default Quote;
