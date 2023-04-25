import { ChakraProvider } from "@chakra-ui/react"
import { useState } from "react"
import Card from "./components/Card"
import products from './data/products.json'
import { Title, ContainerCards } from "./styled"

function App() {
const [pictures, setPictures] = useState(products)

  return (
    <ChakraProvider>
      <Title>Studio de Pictures</Title>
      <ContainerCards>
        {
          pictures.map((product) => {
            return (
              < Card key={product.code} product={product} />)
          })
        }
      </ContainerCards>
    </ChakraProvider>
  )
}

export default App
