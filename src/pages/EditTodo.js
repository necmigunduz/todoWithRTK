import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateTodo } from "../api/apiSlice";
import TopNav from "../components/topNav";
import Input from "../components/input";
import Button from "../components/button";
import Select from "../components/select";

const CreateTodo = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const { todos } = useSelector((state)=>state.todos)
  const currentTodo = todos.filter((todo)=> Number(todo.id) === Number(params.id))
  const { content, id, isCompleted } = currentTodo[0]
  const [values, setValues] = useState({
    content,
    id,
    isCompleted,
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    setValues({
      content: '',
      isCompleted: false
    })
    const formData = new FormData(e.target);
    const inputObject = Object.fromEntries(formData);
    const setCompleted = (inputObject.isCompleted === "true")
    const data = {
      id: values.id,
      content: inputObject.content,
      isCompleted: setCompleted,
    }
    dispatch(updateTodo(params.id, data))
    navigate('/todos-list')
  };
  return (
    <>
      <TopNav />
      <form onSubmit={(e) =>handleSubmit(e)} className="bg-slate-300 h-[18em] mt-1">
        <h1 className="text-center p-4 text-xl text-slate-600 font-bold mx-auto">
          Edit your post
        </h1>
        <div className="mx-6">
          <Input 
            htmlFor={"title"}
            label={"Title of Todo"}
            type={"text"}
            name={"title"}
          />
          <Input 
            htmlFor={"content"}
            label={"Content of Todo"} 
            type={"text"}
            name={"content"}
          />
          <Select 
            name={"isCompleted"}
            label={"Completed"}
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
