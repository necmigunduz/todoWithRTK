const Button = ({btnName}) => {
  return (
    <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-1"
    >
        {btnName}
    </button>
  )
}

export default Button