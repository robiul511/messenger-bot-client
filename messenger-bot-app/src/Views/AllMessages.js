import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
    <div>
      <p>{JSON.stringify(dataAllMessages)}</p>
    </div>
  )
}

export default AllMessages
