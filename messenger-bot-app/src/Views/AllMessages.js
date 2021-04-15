import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MessageComponent from '../Components/MessageComponent'
import { fetchAllMessages } from '../Store/actions'

function AllMessages() {
  const dataAllMessages = useSelector(state => state.allMessages)
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllMessages())
  }, [dispatch])

  if(loading) {
    return (
      <div>
        <h1>Loading ....</h1>
      </div>
    )
  }
  return (
    <div className='container'>
      <h2>Messenger History</h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Birth Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            dataAllMessages.map(dataMessage => (
              <MessageComponent dataMessage={dataMessage} key={dataMessage.id}/>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default AllMessages
