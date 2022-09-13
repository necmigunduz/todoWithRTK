import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTodo } from "../api/apiSlice";
import TopNav from "../components/topNav";
import Input from "../components/input";
import Button from "../components/button";
import Select from "../components/select";

const CreateTodo = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const inputObject = Object.fromEntries(formData);
    console.log(inputObject)
    const setCompleted = (inputObject.isCompleted === "true")
    console.log(setCompleted)
    const data = {
      content: inputObject.content,
      isCompleted: setCompleted,
    }
    console.log(typeof(data.isCompleted))
    dispatch(createTodo(data))
    navigate('/todos-list')
  };
  return (
    <>
      <TopNav />
      <form onSubmit={(e) =>handleSubmit(e)} className="bg-slate-300 h-[18em] mt-1">
        <h1 className="text-center p-4 text-xl text-slate-600 font-bold mx-auto">
          Create a new post
        </h1>
        <div className="mx-6">
          <Input 
            htmlFor={"content"}
            label={"Content of Todo"} 
            placeholder={"Enter content of your new todo"}
            type={"text"}
            name={"content"}
          />
          <Select 
            name={"isCompleted"}
            label={"Completed"}
          />
        </div>
        <div className="ml-6 my-2">
        <Button btnName={"Submit"} type={"submit"} />
        </div>
      </form>
    </>
  );
};

export default CreateTodo;
