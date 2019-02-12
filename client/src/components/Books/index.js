import React, { Component } from "react";

class Books extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <img src={this.props.img} alt="" />
        <li>
          <h2>Title:</h2>
          {this.props.title} <br />
          <h2>Authors:</h2>
          {this.props.authors} <br />
          <h2>Description:</h2>
          {this.props.description} <br />
          <button>
            <a href={this.props.link}>Preview</a>
          </button>
        </li>
      </React.Fragment>
    );
  }
}

export default Books;
