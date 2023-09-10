import { render, screen} from "@testing-library/react"
import Counter from "../components/Counter"
import userEvent from "@testing-library/user-event"

describe("Counter", () => {
    test("deve renderizar com o título", () => {
				// renderiza o componente
        render(<Counter />)

				// seleciona o elemento
        //const title = screen.getByText("Counter")//Dessa forma ele é caseSensitive, então dá erro se não der matcher com maiuscula/minuscula

        const title = screen.getByText(/counter/i) //é como se fosse o %valor% no SQL... Não é case sensitive!
        
				// avalia a assertiva esperada
        expect(title).toBeInTheDocument()
    })

    test("counter deve sempre iniciar com o valor de 0", () => {
        render(<Counter />)
        
        const value = screen.getByText("0")

        expect(value).toBeInTheDocument()
    })

    test("deve aumentar o valor do contador me 1 quando botão de incremento for clicado", async () => {
        
        //configuração do simulador de user
        const user = userEvent.setup()

        //renderização do componente
        render(<Counter />)

        screen.logTestingPlaygroundURL()
        
        //selecionando o elemento que será interagido
        const incrementBtn = screen.getByText(/\+/) //usando regex 
        const decrementBtn = screen.getByRole("button", { name: /\-/i })//selecionando elemento pelo getByRole e usando regex na propriedade name

        //simulando o clique do btn (+)
        await user.click(incrementBtn) //counter vai para 1
        await user.click(incrementBtn) //counter vai para 2
        await user.click(incrementBtn) //counter vai para 3
        //simulando o clique do btn (-)
        await user.click(decrementBtn) //counter vai para 2

        //o valor do contador deve ir para 2
        const value = screen.getByText("2")
        
        expect(value).toBeInTheDocument()
    })

    test("deve decrementar o valor do contador em 1 quando botão de decremento for clicado", async () => {
        //deve ser criado antes da renderização do componente
        const user = userEvent.setup()
        //renderizando o componente
        render(<Counter />)
        //pegando elemento que possui o texto com o "-"
        const decrementBtn = screen.getByText("-")
        //simulando o click do usuário no btn que selecionamos
        await user.click(decrementBtn)

        const value = screen.getByText("-1")
        screen.debug()
        expect(value).toBeInTheDocument()
    })
})