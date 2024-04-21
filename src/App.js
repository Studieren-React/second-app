import "./App.css";

import { Component } from "react";
import { Posts } from './components/Posts';

export default class App extends Component {
  state = {
    posts: [
      { id: 1, name: "John", email: "john@example.com" },
      { id: 2, name: "Bob", email: "bob@example.com" },
      { id: 3, name: "Kevin", email: "kevin@example.com" }
    ]
  };

  deletePost = (id) => {
    this.setState({ posts: this.state.posts.filter(post => post.id !== id) })
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        <Posts
          posts={posts}
          deletePost={this.deletePost}
        />
      </div>
    );
  }
}
