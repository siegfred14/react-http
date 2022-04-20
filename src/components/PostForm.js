import React, { Component } from "react";

class PostForm extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <input type="text" name="userId"></input>
          </div>
          <div>
            <input type="text" name="title"></input>
          </div>
          <div>
            <input type="text" name="body"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
