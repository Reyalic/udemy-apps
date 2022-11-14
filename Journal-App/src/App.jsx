import { useState } from 'react'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppTheme className="App">
      <AppRouter />
    </AppTheme>
  )
}

export default App
