import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h2>List of posts</h2>
      </div>
    );
  }
}

export default PostList;

// for data fetching
// 1. import axios library
// 2. create state property which would store the list of posts
// 3. Use axios to make a GET request to the JSON placeholder API

// since axios is a promise based library, we can add then and catch blocks
