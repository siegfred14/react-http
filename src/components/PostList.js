import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving data" });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        <h2>List of posts</h2>
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
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
