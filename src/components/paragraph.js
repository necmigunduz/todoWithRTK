import React from 'react'

const Paragraph = ({content}) => {
  return (
    <>
        <p className="m-1 text-gray-700 text-base text-center bg-blue-100 p-3 border rounded-2xl">{content}</p>
    </>
  )
}

export default Paragraph