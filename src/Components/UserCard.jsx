import React, { Component } from "react";

class UserCard extends Component {

  render() {

    const { name, email, phone } = this.props;

    return (
      <div className="card">
        <h2>{name}</h2>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
    );

  }

}

export default UserCard;