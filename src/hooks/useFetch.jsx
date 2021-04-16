import { useEffect, useState } from 'react'

const API = "http://localhost:8000/api/v1"

export const useFetch = (action, user={}, entryId=null, newEntry={}) => {

  const [state, setState] = useState({
    data: [],
    status: '',
    message: ''
  })

  const resolveMethod = () => {
    if (action === 'index' || action === 'show') {
      return 'GET'
    } else if (action === 'update') {
      return 'PUT'
    } else if (action === 'create') {
      return 'POST'
    } else if (action === 'delete') {
      return 'DELETE'
    } else {
      return ''
    }
  }

  const resolveRoute = () => {
    if (action === 'index' || action === 'create') {
      return `${API}/users/${user.id}/journals`
    } else if (action === 'show' || action === 'update' || action === 'delete') {
      return `${API}/users/${user.id}/journals/${entryId}`
    } else {
      return `${API}`
    }
  }

  const resolveConfig = () => {
    if (action === 'index' || action === 'show' || action === 'delete') {
      return {
        method: resolveMethod(),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application',
          'authorization': `Bearer ${user.token}`
        }
      }
    } else if (action === 'update' || action === 'create') {
      return {
        method: resolveMethod(),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application',
          'authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify(newEntry)
      }
    }
  }

  useEffect(() => {
    const runFetch = async () => {
      const config = resolveConfig()
      const route = resolveRoute()
      const raw = await fetch(route, config)
      const response = await raw.json()
      return response
    }
    const response = runFetch()
    response.then(r => {
      setState({
        ...state,
        data: r.data,
        status: r.status,
        message: r.message,
      })
    })

  }, [])

  return [state.data, state.status, state.message]

}
