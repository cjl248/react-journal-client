import React from 'react'

const API = "http://localhost:8000/api/v1"

export default function Content() {

  React.useEffect(() => {
    const config = {
      method: "GET",
      header: {
        'Content-Type': 'applicaiton/json',
        'Accepts': 'application/json'
      }
    }
    const route = `${API}/journals`
    fetch(route, config).then(r => r.json()).then((data) => {
      console.log(data);
    })
  }, [])

  return (
    <div>
      CONTENT
    </div>
  )
}
