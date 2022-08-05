import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ExercisesList from "./pages/exercises-list";
import EditExercise from "./pages/edit-exercise";
import CreateUser from "./pages/create-user";
import CreateExercise from "./pages/create-exercise";
import NavBar from "./pages/navbar";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <br/>
      <Routes>
        <Route path="/" element={<ExercisesList/>}/>
        <Route path="/users" element={<CreateUser/>}/>
        <Route path="/edit/:id" element={<EditExercise/>}/>
        <Route path="/create" element={<CreateExercise/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
