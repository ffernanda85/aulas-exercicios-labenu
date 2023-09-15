import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom"; // temos que importar o módulo
import Header from "../components/Header";

jest.mock('react-router-dom', () => {
    return {
        useNavigate: jest.fn()
    } // cada export nomeado será uma propriedade desse objeto retornado ^
}); // se existir um export default junto, a propriedade se chama default

describe("Header", () => {
    test('deve renderizar', async () => {
				// criamos uma variável para guardar o mock (usaremos nos expects)
        const navigateMock = jest.fn()

				// definimos um retorno simulado para esse teste
				// o método é síncrono, por isso usamos a palavra Return em vez de Resolved
        useNavigate.mockReturnValueOnce(navigateMock)

        const user = userEvent.setup()

        render(<Header />)

        const logoutBtn = screen.getByRole('button', {
            name: /deslogar/i
        })

        await user.click(logoutBtn)
        
        expect(navigateMock).toHaveBeenCalledTimes(1)
        expect(navigateMock).toHaveBeenCalledWith("/login")
        expect(navigateMock).toReturn()
    });
})