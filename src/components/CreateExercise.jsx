import React, { Component } from "react";
class CreateExercise extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    users: [],
  };
  onChange;
  render() {
    return (
      <div>
        <p>Create exercise</p>
        form
      </div>
    );
  }
}

export default CreateExercise;
