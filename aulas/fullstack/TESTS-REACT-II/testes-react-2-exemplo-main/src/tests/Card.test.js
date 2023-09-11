// dentro do arquivo src/testes/Card.test.js

import { render, screen } from "@testing-library/react"
import Card from "../components/Card"
import userEvent from "@testing-library/user-event"

// ===================== Início da criação dos mocks =======================

const productMock = {
    id: 55,
    title: "Mouse gamer",
    price: 150.00,
    image: "https://picsum.photos/400",
} // mock de um produto qualquer

const handleCardClickMock = jest.fn() // veja os conceitos de jest.fn() no próximo material
const isSelectedMock = false // inicia desselecionado

// ===================== Fim da criaçao dos mocks =======================

describe("Card", () => {
    test("deve renderizar com título, preço e imagem", () => {
        render(<Card
            product={productMock}
            handleCardClick={handleCardClickMock}
            isSelected={isSelectedMock}
        />)

        const title = screen.getByRole('heading', { name: /mouse gamer/i })
        const price = screen.getByText(/\$150\.00/i)
        const image = screen.getByRole('img', { name: /mouse gamer/i })
    
        expect(title).toBeInTheDocument()
        expect(price).toBeInTheDocument()
        expect(image).toBeInTheDocument()
    })

    test("quando o card for clicado, a função handler deve ser chamada",
    async () => {
        const user = userEvent.setup()

        render(<Card
            product={productMock}
            handleCardClick={handleCardClickMock}
            isSelected={isSelectedMock}
        />)

        const card = screen.getByRole('article')

        await user.click(card)

        expect(handleCardClickMock).toBeCalled() //têm a mesma funcionalidade
      //expect(handleCardClickMock).toHaveBeenCalled()

        expect(handleCardClickMock).toBeCalledTimes(1)
      //expect(handleCardClickMock).toHaveBeenCalledTimes(1)

        expect(handleCardClickMock).toBeCalledWith(55) // id do produto mockado é 55
      //expect(handleCardClickMock).toHaveBeenCalledWith(55)

        expect(handleCardClickMock).toReturn()
      //expect(handleCardClickMock).toHaveReturned()

        expect(handleCardClickMock).toReturnTimes(1)
      //expect(handleCardClickMock).toHaveReturnedTimes(1)

        expect(handleCardClickMock).toReturnWith(undefined)
      //expect(handleCardClickMock).toHaveReturnedWith(undefined)

	  // não é necessário ter tantas assertivas, é só um exemplo!
    })
})