import { render, screen } from "@testing-library/react"
import TodoList from "../components/TodoList"
import userEvent from "@testing-library/user-event"

describe("Testando TodoList", () => {
    
    test("Deve renderizar com o título", () => {
        render(<TodoList />)

        const title = screen.getByText(/todo list/i)
        screen.debug()
        expect(title).toBeInTheDocument()
    })

    test("O input deve iniciar vazio", () => {
        render(<TodoList />)
        screen.debug()
        const input = screen.getByPlaceholderText("Enter a todo")
        expect(input).toHaveValue("")
    })

    test("deve atualizar o valor do input ao digitar nele", async () => {
        render(<TodoList />)
        const input = screen.getByPlaceholderText("Enter a todo")
        const user = userEvent.setup()
        await user.type(input, "Deus")
        expect(input).toHaveValue("Deus")
    })

    test("deve renderizar uma nova tarefa ao apertar o enter", async () => {
        render(<TodoList />)
        const input = screen.getByPlaceholderText("Enter a todo")
        const user = userEvent.setup()
        await user.type(input, "Deus{enter}")
        const result = screen.getByText("Deus")
        expect(result).toBeInTheDocument()
        screen.logTestingPlaygroundURL()
    })

    test("deve alterar o estilo css ao clicar no toggle", async () => {
        render(<TodoList />)
        const input = screen.getByPlaceholderText("Enter a todo")
        const user = userEvent.setup()
        await user.type(input, "Deus{enter}")
        const todoItem = screen.getByText("Deus")
        const btn = screen.getByRole('button', { name: /toggle/i })
        await user.click(btn)
        expect(todoItem).toHaveStyle("text-decoration: line-through")
        await user.click(btn)
        expect(todoItem).toHaveStyle("text-decoration: none")
    })
})