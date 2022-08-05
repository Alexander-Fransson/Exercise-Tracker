import { Routes, Route } from "react-router-dom";
import ExercisesList from "./pages/exercises-list";
import EditExercise from "./pages/edit-exercise";
import CreateUser from "./pages/create-user";
import CreateExercise from "./pages/create-exercise";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ExercisesList/>}/>
      <Route path="/users" element={<CreateUser/>}/>
      <Route path="/edit/:id" element={<EditExercise/>}/>
      <Route path="/create" element={<CreateExercise/>}/>
    </Routes>
  );
}

export default App;
