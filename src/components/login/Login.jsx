import { useState } from 'react'

const API = "http://localhost:8000/api/v1"

export default function Login({ goBack, setUserInfo }) {

  const [state, setState] = useState({
    email: '',
    password: '',
    loginMessage: '',
  })

  const handleBack = () => goBack()

  const handleTyping = (e) => {
    const { name, value } = e.target
    setState({
      ...state,
      [name]: value
    })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const route = `${API}/login`
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        'email': state.email,
        'password': state.password
      })
    }
    const response = await fetch(route, config)
    const data = await response.json()
    if (data.status === 'success') {
      setUserInfo(data.data)
      localStorage.setItem('user', JSON.stringify(data.data))
    } else if (data.status === 'error') {
      setState({
        ...state,
        email: '',
        password: '',
        loginMessage: data.message,
      })
    }
  }

  return (
    <div className='login-container'>
      <button onClick={handleBack}>BACK</button>
      LOG IN
      <form className = 'login-form'>
        <input className='login-input'
          placeholder='email'
          type='text'
          name='email'
          value={state.email}
          onChange={handleTyping}
        />
        <input className='login-input'
          placeholder='password'
          type='password'
          name='password'
          value={state.password}
          onChange={handleTyping}
        />
        <button className='login-button'
          onClick={handleLogin}>
          SUBMIT
        </button>
      </form>
      <div>{state.loginMessage}</div>
    </div>
  )
}
