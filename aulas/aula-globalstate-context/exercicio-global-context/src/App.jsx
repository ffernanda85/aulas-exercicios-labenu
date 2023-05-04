import { ChakraProvider } from "@chakra-ui/react"
import { GlobalState } from "./contexts/GlobalState"
import { Router } from "./router/Router"


function App() {
  //const context = GlobalState()

  return (
    <GlobalState>
      <Router />
    </GlobalState>
  )
}

export default App
