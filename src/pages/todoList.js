import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import TopNav from "../components/topNav";
import { getTodos } from "../api/apiSlice";
import TodoCard from "../components/todoCard";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, loading } = useSelector((state) => state.todos);
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  const strfy = (str) => {
    return str.toString().charAt(0).toUpperCase() + str.toString().slice(1);
  };
  const reversed_todos = todos.slice().sort((a, b) => b.id - a.id);
  const ListItems = reversed_todos.map((todo) => (
    <TodoCard
      key={todo.id.toString()}
      content={todo.content}
      isCompleted={strfy(todo.isCompleted)}
      id={todo.id}
    />
  ));

  if (loading)
    return (
      <div className="text-center bg-slate-100 font-bold mt-8">Loading...</div>
    );
  if (todos.length === 0)
    return (
      <div>
        <TopNav />
        <div className="text-center m-8 bg-slate-100 w-full mx-auto p-8">
          <p>No todos inserted!</p>
          <p>
            You can insert new todos by clicking on{" "}
            <Link to="/create-todo">
              <span className="text-cyan-400">Create a new todo</span>
            </Link>
            .
          </p>
        </div>
      </div>
    );
  return (
    <div>
      <TopNav />
      <div className="grid md:grid-cols-4">{ListItems}</div>
    </div>
  );
};

export default TodoList;
