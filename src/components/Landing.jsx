import { useState } from 'react'
import Login from './login/Login.jsx'
import Register from './login/Register.jsx'

export default function Landing() {

  const [state, setState] = useState({
    landing: true,
    register: false,
    login: false,
  })

  const handleRegister = () => {
    setState({
      ...state,
      landing: false,
      register: true,
    })
  }

  const handleLogin = () => {
    setState({
      ...state,
      landing: false,
      login: true,
    })
  }

  const goBack = () => {
    setState({
      landing: true,
      register: false,
      login: false,
    })
  }

  const renderWelcome = () => {
    if (state.landing) {
      return (
        <div>
          <section>WELCOME</section>
          <section>
            <button
              onClick={handleRegister}>
              NEW USER
            </button>
            <button
              onClick={handleLogin}>
              LOGIN
            </button>
          </section>
          <main>
          </main>
        </div>
      )
    }
  }

  const renderMain = () => {
    if (state.register) {
      return <Register goBack={goBack} />
    }
    if (state.login) {
      return <Login goBack={goBack} />
    }
    if  (state.landing) {
      return renderWelcome()
    }
  }

  return (
    <div className='landing-container'>
      {renderMain()}
    </div>
  )
}
