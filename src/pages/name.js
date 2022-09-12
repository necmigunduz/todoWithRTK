import { useNavigate } from "react-router-dom";
import NameForm from "../components/nameForm";
import { saveName } from '../localStorage/localStorage'

const NameEntry = () => {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const inputObject = Object.fromEntries(formData);
    saveName(inputObject.name)
    navigate('/todos-list')
  };

  return (
    <>
      <h1 className='font-bold my-2 text-center bg-slate-400 text-white py-8 text-3xl'>Welcome to Add Post App</h1>
      <NameForm
        label={"Name"}
        type={"text"}
        inputItem={"name"}
        handleSubmit={handleSubmit}
        placeholder={"Enter your name here"}
      />
    </>
  );
}

export default NameEntry;