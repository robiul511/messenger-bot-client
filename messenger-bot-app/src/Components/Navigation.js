import React from 'react'
import { useHistory } from 'react-router'

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
        <h2>Messenger Bot App</h2>
        <div style={{display: 'flex'}}>
          <button className="btn btn-warning" onClick={goToHomePage}>Home</button>
          <button className="btn btn-primary" onClick={goToAllMessagePage}>All messages</button>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
