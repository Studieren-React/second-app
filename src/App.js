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

  callConsole = () => {
    console.log('call method on app.js');
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        <Posts
          posts={posts}
          cb={this.callConsole}
        />
      </div>
    );
  }
}
