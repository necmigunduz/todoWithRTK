import { Route, Routes } from "react-router-dom";
import EditTodo from "./pages/EditTodo";
import CreateTodo from "./pages/CreateTodo";
import NameEntry from "./pages/name";
import TodoList from "./pages/todoList";

function App() {
  return (
    <Routes>
      <Route path='/' element={<NameEntry />} />
      <Route path='/todos-list' element={<TodoList />} />
      <Route path='/create-todo' element={<CreateTodo />} />
      <Route path='/edit-post/:id' element={<EditTodo />} />
    </Routes>
  );
}

export default App;
