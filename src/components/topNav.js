import  { Link } from 'react-router-dom'
import { loadName } from "../localStorage/localStorage";

const TopNav = () => {
  const name = loadName();
  return (
    <div className="mx-auto py-5 bg-slate-500 flex justify-between">
      <Link to='/posts-list'>
        <div 
            className="ml-4 text-white font-bold text-xl border-8 border-slate-600 bg-slate-800 p-2 rounded-3xl">
            POSTAPP
        </div>
      </Link>
      <h1 className="text-white text-sm font-bold text-right mr-4">
        <span className="text-slate-200 underline underline-offset-1">
          Username
        </span>
        <br />
        {name}
      </h1>
    </div>
  );
};

export default TopNav;
