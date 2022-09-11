import { Route, Routes } from "react-router-dom";
import NameEntry from "./pages/name";
import PostList from "./pages/postList";

function App() {
  return (
    <Routes>
      <Route path='/' element={<NameEntry />} />
      <Route path='/posts-list' element={<PostList />} />
    </Routes>
  );
}

export default App;
