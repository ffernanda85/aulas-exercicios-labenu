import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios"; // temos que importar o módulo aqui também
import UsersList from "../components/UsersList";

jest.mock("axios"); // módulo inteiro mockado

const axiosResponseMock = {
  data: [
    {
      id: 1,
      name: "Fulana",
      email: "fulana@email.com",
      address: {
        city: "Rio de Janeiro",
      },
      company: {
        name: "Bananinha LTDA",
      },
    },
    {
      id: 2,
      name: "Ciclano",
      email: "ciclano@email.com",
      address: {
        city: "São Paulo",
      },
      company: {
        name: "Bananinha Trainee Center",
      },
    },
  ],
};

describe("UsersList", () => {
  // roda essa lógica antes de todo o teste (também existe o afterEach)
  beforeEach(() => {
    axios.mockReset(); // limpa o mock antes de todo o teste
  });

  //beforeAll(() => { })
  //afterAll(() => { })
  //afterEach(() => { })

  test("deve renderizar users", async () => {
    // definição do retorno do próximo axios.get() executado
    // quando for assíncrono, deve ser usado com a palavra 'Resolved'
    axios.get.mockResolvedValueOnce(axiosResponseMock);//na próxima vez que rodar deve retornar o axiosResponseMock

    // caso seja síncrono, deve ser usado com .mockReturnValueOnce

    render(<UsersList />); // esse componente não recebe props

    // aqui ficam os expects que podem ser feitos desde a primeira renderização
    expect(screen.getByText("Users data")).toBeInTheDocument();

    expect(await screen.findByText("Fulana")).toBeInTheDocument();//findBy funciona como o waitFor
    // o waitFor permite o carregamento das re-renderizações
    // e possibilita lógicas assíncronas em seu interior
    await waitFor(() => {
      // aqui ficam os expects que necessitam de algum carregamento
      expect(screen.getByText("Fulana")).toBeInTheDocument();
    });

    // também podemos abreviar expects sem o waitFor através do findBy
    expect(await screen.findByText("Ciclano")).toBeInTheDocument();

    // caso queira visualizar o HTML depois de todos os carregamentos
    // o debug tem que ficar aqui logo após um waitFor
    screen.debug();
  });
});
