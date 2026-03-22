import React, { Component } from "react";
import UserCard from "./components/UserCard";
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => this.setState({ users: data, loading: false }));
  }

  render() {

    if (this.state.loading) {
      return <h2>Loading users...</h2>;
    }

    return (
      <div>

        <h1>User Dashboard</h1>

        {this.state.users.map(user => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            phone={user.phone}
          />
        ))}

      </div>
    );
  }
}

export default App;