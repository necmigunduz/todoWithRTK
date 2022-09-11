import { Route, Routes } from "react-router-dom";
import NameEntry from "./pages/name";
import TodoList from "./pages/todoList";

function App() {
  return (
    <Routes>
      <Route path='/' element={<NameEntry />} />
      <Route path='/todos-list' element={<TodoList />} />
    </Routes>
  );
}

export default App;
