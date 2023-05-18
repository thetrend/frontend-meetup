import { useParams } from 'react-router-dom'

import './App.css'

function App() {
  const { displayName } = useParams();
  return (
    <>
      <h1 className="hello">
        Hello, {displayName ?? 'World'}!
      </h1>
    </>
  )
}

export default App
