import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: ""
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          maxLength={this.state.maxChars}
          onChange={event => this.setState({ message: event.target.value })}
          value={this.state.message}
          id="message"
        />
        {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
