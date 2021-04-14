export function setAllMessages (payload) {
  return {type:'ALLMESSAGES/SETALLMESSAGES', payload}
}
export function setLoading (payload) {
  return {type: 'LOADING/SETLOADING', payload}
}

export function fetchAllMessages () {
  return async (dispatch) => {
    try{
      dispatch(setLoading(true))
      const res = await fetch('http://localhost:4000/message')
      const data = await res.json()
      dispatch(setAllMessages(JSON.parse(JSON.stringify(data))))
      dispatch(setLoading(false))
    }
    catch(err) {
      console.log(err)
    }
    
  }
}
export function deleteMessage (id) {
  return async (dispatch) => {
    try{
      dispatch(setLoading(true))
      const res = await fetch(`http://localhost:4000/message/${id}`, {method: 'delete'})
      const data = await res.json()
      dispatch(fetchAllMessages())
    }
    catch(err) {
      console.log(err)
    }
    
  }
}