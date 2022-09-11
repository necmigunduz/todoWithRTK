import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TopNav from "../components/topNav";
import { getTodos } from "../api/apiSlice";

const TodoList = () => {
  const dispatch = useDispatch()
  const { todos, loading } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])
  
  return (
    <div>
      <TopNav />
    </div>
  );
};

export default TodoList;
