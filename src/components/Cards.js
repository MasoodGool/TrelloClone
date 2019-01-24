import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <li>
          {/* id = {this.props.id} */}
          <br />
          <p> {this.props.body}</p>

          <br />
          <button className="btn-completed" onClick={this.props.delete}>
            Completed
          </button>
          <hr />
        </li>
      </div>
    );
  }
}
