import React, { Component } from "react";
import Card from "./Cards";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.postId = 0;
    this.Body = "None";
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
    this.Body = e.target.value;
  };

  addPost = () => {
    this.postId = this.postId + 1;
    const copyPostArray = Object.assign([], this.state.postArray);
    copyPostArray.push({
      id: this.postId,
      body: this.Body
    });
    this.setState({
      postArray: copyPostArray
    });
  };

  render() {
    return (
      <div className="board">
        <input
          type="text"
          onBlur={this.setPost}
          placeholder="enter your post here"
        />
        <button className="btn-add" onClick={this.addPost}>
          Add Post
        </button>
        <ul>
          {this.state.postArray.map((post, index) => {
            return (
              <Card
                className="card"
                key={post.id}
                id={post.id}
                body={post.body}
                delete={this.deleteEvent.bind(this, index)}
              />
            );
          })}
        </ul>
        <button className="btn-completed" onClick={this.props.delete}>
          Delete Board
        </button>
      </div>
    );
  }
}
