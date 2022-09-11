import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TopNav from "../components/topNav";
import { getTodos } from "../api/apiSlice";
import TodoCard from "../components/todoCard";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, loading } = useSelector((state) => state.todos);
  console.log(todos);
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  const strfy = (str) => {
    return str.toString().charAt(0).toUpperCase()+str.toString().slice(1)
  }
  const reversed_todos = todos.slice().sort((a, b) => b.id - a.id)
  const ListItems = reversed_todos.map((todo) => (
    <TodoCard
      key={todo.id.toString()}
      title={todo.content}
      content={todo.content}
      isCompleted={strfy(todo.isCompleted)}
      id={todo.id}
    />
  ));

  if (loading)
    return (
      <div className="text-center bg-slate-100 font-bold mt-8">Loading...</div>
    );
  return (
    <div>
      <TopNav />
      <div className="grid-cols-4 gap-4">{ListItems}</div>
    </div>
  );
};

export default TodoList;
