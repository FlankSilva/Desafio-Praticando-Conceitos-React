import './global.css'
import { TaskProvider } from './hooks/TaskContext'

import { Home } from './pages/Home'

function App() {
  return (
    <TaskProvider>
      <Home />
    </TaskProvider>
  )
}

export default App
