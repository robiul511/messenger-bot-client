import React from 'react'
import { useHistory } from 'react-router'
import messegeImage from '../Images/messengerBotPicture2.png'

function Home() {
  const history = useHistory()
  function goToChatPage() {
    history.push('/chat')
  }

  return (
    <div className='container' style={{textAlign: 'center', display: 'flex', flexDirection: 'column'}}>
      <img src={messegeImage} style={{margin: 5}} height="520" className="d-inline-block align-top" alt=""/>
      <button className='btn btn-success btn-lg' style={{margin: 5}} onClick={goToChatPage}>Chat ME!</button>
    </div>
  )
}

export default Home

