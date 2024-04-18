import "./App.css";

import { Component } from "react";

export default class App extends Component {
  state = {
    posts: [
      { id: 1, name: "John", email: "john@example.com" },
      { id: 2, name: "Bob", email: "bob@example.com" },
      { id: 3, name: "Kevin", email: "kevin@example.com" }
    ]
  };

  render() {
    return (
      <div className="App">
        {this.state.posts.map(post => (
          <p key={post.id}>{post.name}</p>
        ))}
      </div>
    );
  }
}
