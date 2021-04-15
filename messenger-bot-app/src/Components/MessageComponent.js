import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteMessage } from '../Store/actions'

function MessageComponent(props) {
  const { dataMessage } = props
  const dispatch = useDispatch()

  function deleteMessageButton () {
    dispatch(deleteMessage(dataMessage.id))
  }
  return (
    <tr>
      {/* <th scope="row">1</th> */}
      <td>{dataMessage.first_name}</td>
      <td>{dataMessage.birth_date.slice(0, 10)}</td>
      <td><button className='btn btn-danger' onClick={deleteMessageButton}>Delete</button></td>
    </tr>
  )
}

export default MessageComponent
