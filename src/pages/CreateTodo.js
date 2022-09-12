import { useNavigate } from "react-router-dom";
import TopNav from "../components/topNav";
import Input from "../components/input";
import Button from "../components/button";

const CreateTodo = () => {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const inputObject = Object.fromEntries(formData);
    console.log(inputObject)
    // navigate('/todos-list')
  };
  return (
    <>
      <TopNav />
      <form onSubmit={(e) =>handleSubmit(e)} className="bg-slate-300 h-[15em] mt-1">
        <h1 className="text-center p-4 text-xl text-slate-600 font-bold mx-auto">
          Create a new post
        </h1>
        <div className="mx-6">
          <Input 
            htmlFor={"title"}
            label={"Title of Todo"}
            placeholder={"Enter a title for your new todo"}
            type={"text"}
            name={"title"}
          />
          <Input 
            htmlFor={"content"}
            label={"Content of Todo"} 
            placeholder={"Enter content of your new todo"}
            type={"text"}
            name={"content"}
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
