import React from 'react'

const NameForm = ({type, label, inputItem, handleSubmit, value, placeholder}) => {
  return (
    <div  className='w-full max-w-xs mx-auto mt-8'>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit} action="name" method="post">
            <div className="mb-4" >
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={inputItem}>{label}</label>
            <input 
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
              type={type} 
              name={inputItem} 
              id={inputItem} 
              value={value}
              placeholder={placeholder} 
            />
            </div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type="submit">Submit</button>
        </form>
    </div>
  )
}

export default NameForm