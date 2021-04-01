import { useState } from 'react'

export default function Login({ goBack }) {

  const [state, setState] = useState({
    username: '',
    password: ''
  })

  const handleBack = () => goBack()

  const handleTyping = (e) => {
    const { name, value } = e.target
    setState({
      ...state,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='login-container'>
      <button onClick={handleBack}>BACK</button>
      LOG IN
      <form className = 'login-form'>
        <input className='login-input'
          placeholder='username'
          type='text'
          name='username'
          value={state.username}
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
          onClick={handleSubmit}>
          SUBMIT
        </button>
      </form>
    </div>
  )
}
