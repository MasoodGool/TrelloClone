import React, { Component } from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.postId = 0;
    this.Heading = "New Board";
    this.state = {
      postArray: []
    };
  }

  deleteEvent = index => {
    const copyPostArray = Object.assign([], this.state.postArray);
    copyPostArray.splice(index, 1);
    this.setState({
      postArray: copyPostArray
    });
  };

  setPost = e => {
    this.Heading = e.target.value;
  };

  addPost = () => {
    this.postId = this.postId + 1;
    const copyPostArray = Object.assign([], this.state.postArray);
    copyPostArray.push({
      id: this.postId,
      heading: this.Heading
    });
    this.setState({
      postArray: copyPostArray
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="board">
          <input
            type="text"
            onBlur={this.setPost}
            placeholder="Enter Board Name here"
          />
          <button className="btn-add" onClick={this.addPost}>
            Add Board
          </button>
          <ul>
            {this.state.postArray.map((post, index) => {
              return (
                <div className="board" key={post.id}>
                  <h6>{post.heading}</h6>
                  <Board
                    className="card"
                    key={post.id}
                    id={post.id}
                    heading={post.heading}
                    delete={this.deleteEvent.bind(this, index)}
                  />
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
