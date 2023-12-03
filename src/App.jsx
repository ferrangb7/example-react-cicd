import { usePageWeight } from "./hooks/usePageWeight"
import { AppRouter } from "./router/AppRouter"

function App() {
  usePageWeight();

  return (
    <div>
      <AppRouter />
    </div>
  )
}

export default App
