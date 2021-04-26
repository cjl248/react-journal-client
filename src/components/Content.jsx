// import { useEffect } from 'react'
import { useFetch } from '../hooks/useFetch.jsx'

// const API = "http://localhost:8000/api/v1"

export default function Content({ user, token, setUserInfo }) {

  const [data, status] = useFetch('index', user)

  const handleLogout = () => {
    setUserInfo(null)
    localStorage.clear()
  }

  const renderEntries = () => {
    if (status === 'success' && data) {
      return data.map(entry => {
        return (
          <section key={entry.id} style={{marginTop: '30px'}}>
            <div>{entry.title}</div>
            <div>{entry.content}</div>
            <div>{entry.count}</div>
          </section>
        )
      })
    } else if (status === 'error') {
      return (
        <h1>Entries could not be loaded...</h1>
      )
    } else {
      return (
        <h1>No entries found...</h1>
      )
    }
  }
  return (
    <div>
      CONTENT
      <button onClick={handleLogout}>LOGOUT</button>
      <div>
        {renderEntries()}
      </div>
    </div>
  )
}
