import { useState } from 'react'

const API = "http://localhost:8000/api/v1"

export default function Register({ goBack, setUserInfo }) {

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
    registerMessage: '',
  })

  const handleBack = () => goBack()

  const handleTyping = (e) => {
    const { name, value } = e.target
    setState({
      ...state,
      [name]: value
    })
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    if (state.password !== state.repeatPassword) {
      setState({
        ...state,
        registerMessage: 'Passwords do not match'
      })
    } else if (!state.email) {
      setState({
        ...state,
        registerMessage: 'Email is required'
      })
    } else if (!state.password) {
      setState({
        ...state,
        registerMessage: 'Password is required'
      })
    } else if (!state.firstName || !state.lastName) {
      setState({
        ...state,
        registerMessage: 'Full name required'
      })
    } else {
      const route = `${API}/register`
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'firstName': state.firstName,
          'lastName': state.lastName,
          'email': state.email,
          'password': state.password,
        })
      }
      const response = await fetch(route, config)
      const data = await response.json()
      console.log(data)
      if (data.status === 'error') {
        setState({
          ...state,
          registerMessage: data.message
        })
      } else if (data.status === 'success') {
        setUserInfo(data.data)
        localStorage.setItem('user', JSON.stringify(data.data))
      }
    }
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
      <div>{state.registerMessage}</div>
    </div>
  )
}
