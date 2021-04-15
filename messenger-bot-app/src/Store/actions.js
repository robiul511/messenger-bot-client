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
export function addMessage (payload) {
  return async (dispatch) => {
    try{
      const res = await fetch(`http://localhost:4000/message`, {
        method: 'POST', 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: payload.firstName,
          birthDate: payload.birthDate
        })
      })
      const data = await res.json()
      dispatch(fetchAllMessages())
    }
    catch(err) {
      console.log(err)
    }
    
  }
}
export function deleteMessage (payload) {
  return async (dispatch) => {
    try{
      const res = await fetch(`http://localhost:4000/message/${payload}`, {method: 'DELETE'})
      const data = await res.json()
      dispatch(fetchAllMessages())
    }
    catch(err) {
      console.log(err)
    }
    
  }
}