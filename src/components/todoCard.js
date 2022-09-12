import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteTodo } from "../api/apiSlice";
import Button from './button';
import Paragraph from './paragraph';

const TodoCard = ({title, content, isCompleted, id}) => {
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteTodo({id: id}))
  }
  return (
    <div className="rounded border bg-slate-800 text-white border-teal-200 rounded-lg m-2 shadow-xl">
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2 ml-4">Title of todo: {title}</div>
        <Paragraph content={content} />        
        <div className="ml-2">
          <Link to={`/edit-post/${id}`}>
            <Button btnName={'Edit'} />
          </Link>
          <Button btnName={'Delete'} handleClick={()=> handleDelete(id)} />
        </div>
        <p className="text-right mr-4">
          Completed: {isCompleted}
        </p>
      </div>
    </div>
  );
};

export default TodoCard;
