import  { Link } from 'react-router-dom'
import { loadName } from "../localStorage/localStorage";

const TopNav = () => {
  const name = loadName();
  return (
    <div className="mx-auto py-5 bg-slate-500 flex justify-between">
      <Link to='/todos-list'>
        <div 
            className="ml-2 pl-3 py-1 pr-1 text-amber-600 font-bold tracking-[0.5em] text-lg border-8 border-slate-600 bg-slate-800 rounded-3xl">
            todos
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
