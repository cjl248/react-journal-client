import { useState } from 'react'

export default function Register({ goBack }) {

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
  })

  const handleBack = () => goBack()

  const handleTyping = (e) => {
    const { name, value } = e.target
    setState({
      ...state,
      [name]: value
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()
  }

  return (
    <div className='register-container'>
      <button onClick={handleBack}>BACK</button>
      REGISTER
      <form className='register-form'>
        <input className='register-input'
          placeholder='first name'
          type='text'
          name='firstName'
          value={state.firstName}
          onChange={handleTyping}>
        </input>
        <input className='register-input'
          placeholder='last name'
          type='text'
          name='lastName'
          value={state.lastName}
          onChange={handleTyping}>
        </input>
        <input className='register-input'
          placeholder='email'
          type='email'
          name='email'
          value={state.email}
          onChange={handleTyping}>
        </input>
        <input className='register-input'
          placeholder='password'
          type='password'
          name='password'
          value={state.password}
          onChange={handleTyping}>
        </input>
        <input className='register-input'
          placeholder='repeat password'
          type='password'
          name='repeatPassword'
          value={state.repeatPassword}
          onChange={handleTyping}>
        </input>
        <button
          className='register-button'
          onClick={handleRegister}>
          REGISTER
        </button>
      </form>
    </div>
  )
}
