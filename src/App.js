import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {} from "module";

import Navbar from "./components/Navbar";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";
import EditExercise from "./components/EditExercise";
import ExerciseList from "./components/ExerciseList";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <a href="/load.html">Load</a>
        <br></br>
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
