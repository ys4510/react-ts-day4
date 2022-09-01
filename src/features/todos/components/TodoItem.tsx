import React, { FC } from 'react'
import { Todo } from '../types'

type Props = {
  todo: Todo,
}

const TodoItem: FC<Props> = ({todo}) => {
  return (
    <>
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.body}</td>
      <td>{todo.status}</td>
      <td>{todo.createdAt}</td>
      <td>{todo.updatedAt}</td>
      <td>{todo.deletedAt}</td>
      <td><button>UPDATE</button></td>
      <td><button>DELETE</button></td>
    </tr>
    </>
  )
}

export default TodoItem