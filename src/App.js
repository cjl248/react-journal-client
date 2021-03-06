import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Content from './components/Content.jsx'
import Landing from './components/Landing.jsx'

function App() {

  const [state, setState] = useState({
    user: null,
  })

  const setUserInfo = (user) => {
    setState({ user })
  }

  const renderMain = () => {
    if (state.user) {
      return (
        <Content
          user={state.user}
          setUserInfo={setUserInfo}
        />
      )
    } else {
      return (
        <Landing
          setUserInfo={setUserInfo}
        />
      )
    }
  }

  useEffect(() => {
    if (!state.user) {
      setState(state => {
        return {
          ...state,
          user: JSON.parse(localStorage.getItem('user'))
        }
      })
    }
  }, [state.user])

  return (
    <div className="App">
      {renderMain()}
    </div>
  );
}

export default App;
