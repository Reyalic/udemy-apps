import { AuthProvider } from './auth'
import { AppRouter } from './router/AppRouter'

function App() {

  return (
    <AuthProvider className="App">
        <AppRouter />
    </AuthProvider>
  )
}

export default App
