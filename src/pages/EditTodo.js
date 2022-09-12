import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

const EditTodo = () => {
  const dispatch = useDispatch()
  const { todos, loading } = useSelector((state)=> state)
  console.log(todos)
  const navigate = useNavigate()
  const { id } = useParams()
  return (
    <div>Edit your post: {id}</div>
  )
}

export default EditTodo