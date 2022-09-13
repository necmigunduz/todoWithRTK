import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateTodo } from "../api/apiSlice";
import TopNav from "../components/topNav";
import Input from "../components/input";
import Button from "../components/button";
import Select from "../components/select";
import { loadID, saveID } from "../localStorage/localStorage";

const CreateTodo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  saveID(params.id)
  const ID = loadID()
  const { todos } = useSelector((state) => state.todos);
  console.log(todos)
  const currentTodo = todos.filter(
    (todo) => Number(todo.id) === Number(ID)
  );
  const { content, id, isCompleted } = currentTodo[0];
  const [values, setValues] = useState({
    content,
    id,
    isCompleted,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({
      content: "",
      isCompleted: false,
    });
    const formData = new FormData(e.target);
    const inputObject = Object.fromEntries(formData);
    const setCompleted = inputObject.isCompleted === "true";
    const data = {
      id: ID,
      content: inputObject.content,
      isCompleted: setCompleted,
    };
    dispatch(updateTodo(data));
    navigate("/todos-list");
  };
  return (
    <>
      <TopNav />
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-slate-300 h-[18em] mt-1"
      >
        <h1 className="text-center p-4 text-xl text-slate-600 font-bold mx-auto">
          Edit your post
        </h1>
        <div className="mx-6">
          <Input
            htmlFor={"content"}
            label={"Content of Todo"}
            type={"text"}
            name={"content"}
            value={values.content}
            onChange={(e) =>
              setValues({
                ...values,
                content: e.target.value,
              })
            }
          />
          <Select 
            name={"isCompleted"} 
            label={"Completed"} 
            value={values.isCompleted}
            onChange={(e) =>
              setValues({
                ...values,
                isCompleted: e.target.value,
              })
            }
          />
        </div>
        <div className="ml-6 my-2">
          <Button btnName={"Update"} type={"submit"} />
        </div>
      </form>
    </>
  );
};

export default CreateTodo;
