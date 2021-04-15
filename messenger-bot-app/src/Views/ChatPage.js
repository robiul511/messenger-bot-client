import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMessage } from '../Store/actions'

function ChatPage() {
  const [firstName, setFirstName] = useState('')
  const [firstNameOnChange, setFirstNameOnChange] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [birthDateOnChange, setBirthDateOnChange] = useState('')
  const [answerQuestion, setAnswerQuestion] = useState('')
  const [answerQuestionOnchange, setAnswerQuestionOnchange] = useState('')
  const [responseBot, setResponseBot] = useState('Ok Good bye!')
  const dispatch = useDispatch()

  function changeFirstNameOnChange(value) {
    setFirstNameOnChange(value)
  }
  function changeFirstName() {
    setFirstName(firstNameOnChange)
  }
  function changeBirthDateOnChange(value) {
    setBirthDateOnChange(value)
  }
  function changeBirthDate() {
    setBirthDate(birthDateOnChange)
  }
  function changeAnswerQuestionOnchange(value) {
    setAnswerQuestionOnchange(value)
  }
  
  function countBirthDate(date) {
    const birthDate = new Date(date)
    const birthDateMounth = birthDate.getMonth()
    const birthDateDate = birthDate.getDate()
    console.log(birthDate, birthDateMounth, birthDateDate)
    const curentDate = new Date()
    const curentDateMounth = curentDate.getMonth()
    const curentDateDate = curentDate.getDate()
    console.log(curentDate, curentDateMounth, curentDateDate)
    const differenceMounth = (11 - birthDateMounth) + curentDateMounth
    const getCountBirthDate = (differenceMounth * 30) - (birthDateDate + curentDateDate)
    return `There are ${getCountBirthDate} days left until your next birthday`
  }

  function changeAnswerQuestion() {
    if(answerQuestionOnchange === 'yes') {
      // console.log(answerQuestionOnchange)
      setResponseBot(countBirthDate(birthDate))
      setAnswerQuestion(answerQuestionOnchange)
      dispatch(addMessage({firstName, birthDate}))
    } else {
      setAnswerQuestion(answerQuestionOnchange)
      dispatch(addMessage({firstName, birthDate}))
    }
  }

  if(!firstName) {
    return (
      <div className='container'>
        <h1>Hi! Whats your name?</h1>
        <input onChange={(e) => changeFirstNameOnChange(e.target.value)} type="text" className="form-control" placeholder="Enter your First name" value={firstNameOnChange} />
        <button className='btn btn-primary' onClick={changeFirstName}>enter</button>
      </div>
    )
  }
  if(firstName && !birthDate) {
    return (
      <div className='container'>
        <h1>Hi! Whats your name?</h1>
        <h1 style={{textAlign: 'end'}}>{firstName}</h1>
        <h1>When were you born?</h1>
        <input onChange={(e) => changeBirthDateOnChange(e.target.value)} type="text" className="form-control" placeholder="YYYY-MM-DD" value={birthDateOnChange} />
        <button className='btn btn-primary' onClick={changeBirthDate}>enter</button>
      </div>
    )
  }
  if(firstName && birthDate && !answerQuestion) {
    return (
      <div className='container'>
        <h1>Hi! Whats your name?</h1>
        <h1 style={{textAlign: 'end'}}>{firstName}</h1>
        <h1>When were you born?</h1>
        <h1 style={{textAlign: 'end'}}>{birthDate}</h1>
        <h1>do you want to know how many days until your birthday?</h1>
        <input onChange={(e) => changeAnswerQuestionOnchange(e.target.value)} type="text" className="form-control" placeholder="yes/no" value={answerQuestionOnchange} />  
        <button className='btn btn-primary' onClick={changeAnswerQuestion}>enter</button>
      </div>
    )
  }
  return (
    <div className='container'>
      <h1>Hi! Whats your name?</h1>
      <h1 style={{textAlign: 'end'}}>{firstName}</h1>
      <h1>When were you born?</h1>
      <h1 style={{textAlign: 'end'}}>{birthDate}</h1>
      <h1>do you want to know how many days until your birthday?</h1>
      <h1 style={{textAlign: 'end'}}>{answerQuestion}</h1>
      <h1>{responseBot}</h1>
    </div>
  )
}

export default ChatPage
