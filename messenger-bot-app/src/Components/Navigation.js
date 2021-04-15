import React from 'react'
import { useHistory } from 'react-router'
import logo from '../Images/messengerBotLogo2.png'

function Navigation() {
  const history = useHistory()

  function goToHomePage () {
    history.push('/')
  }
  function goToAllMessagePage () {
    history.push('/allMessages')
  }
  return (
    <div>
      <nav style={{display: 'flex', backgroundColor: 'blueviolet', justifyContent: 'space-between'}}>
        <div style={{display: 'flex'}}>
          <img src={logo} style={{margin: 3}} width="55" height="55" className="d-inline-block align-top" alt=""/>
          <h2 style={{margin: 3}}>Messenger Bot App</h2>
        </div>
        <div style={{display: 'flex', margin: 3}}>
          <button className="btn btn-warning" style={{margin: 3}} onClick={goToHomePage}>Home</button>
          <button className="btn btn-primary" style={{margin: 3}}  onClick={goToAllMessagePage}>All messages</button>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
