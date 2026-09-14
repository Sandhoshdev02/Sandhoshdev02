import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('/api/greeting')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Failed to reach backend'))
  }, [])

  return (
    <div>
      <h1>Starter App</h1>
      <p>{message}</p>
    </div>
  )
}

export default App
