import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filtro, setFiltro] = useState("")

  useEffect(() => {
    if (localStorage.getItem("tarefas")) {//verificando se tem algo dentro do localStorage antes de setar Tarefas e não correr o risco de apagar o array.
      setTarefas(JSON.parse(localStorage.getItem("tarefas")));
    }
  }, []);
  
  useEffect(() => {
    if (tarefas.length) {//verificando se tem algo dentro de tarefas para não setar o localStorage com um array vazio e não acabar zerando ele.
      localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }
  }, [tarefas]);

//Utilizando variavel para setar o localStorage
// useEffect(() => {
 /*  if (localStorage.getItem("tarefas")) {
    setTarefas(JSON.parse(localStorage.getItem("tarefas")));
  }
}, []);

if (dataOk) {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
  dataOk = false
}

const onChangeInput = (event) => {
  setInputValue(event.target.value);
};

const criaTarefa = () => {
  if (!inputValue) return;
  const inserirNovaTarefa = [
    ...tarefas,
    {
      id: Date.now(),
      texto: inputValue,
      completa: false
    }
  ];
  setTarefas(inserirNovaTarefa);
  setInputValue("");
  dataOk=true
};

const selectTarefa = (id) => {
  const mudaTarefa = tarefas.map((tarefa) => {
    if (tarefa.id === id) {
      tarefa.completa = !tarefa.completa;
    }
    return tarefa;
  });
  setTarefas(mudaTarefa);
  dataOk=true
}; */

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const criaTarefa = () => {
    if (!inputValue) return;
    const inserirNovaTarefa = [
      ...tarefas,
      {
        id: Date.now(),
        texto: inputValue,
        completa: false
      }
    ];
    setTarefas(inserirNovaTarefa);
    setInputValue("");
  };

  const selectTarefa = (id) => {
    const mudaTarefa = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        tarefa.completa = !tarefa.completa;
      }
      return tarefa;
    });
    setTarefas(mudaTarefa);
  };

  const onChangeFilter = (event) => {
    setFiltro(event.target.value);
  };

  const listaFiltrada = tarefas.filter((tarefa) => {
    switch (filtro) {
      case "pendentes":
        return !tarefa.completa;
      case "completas":
        return tarefa.completa;
      default:
        return true;
    }
  });

  return (
    <Container>
      <h1>Lista de tarefas</h1>
      <InputsContainer>
        <input
          value={inputValue}
          onChange={onChangeInput}
          onKeyDown={(e) => e.key === "Enter" && criaTarefa()}
        />
        <button onClick={criaTarefa}>Adicionar</button>
      </InputsContainer>
      <br />

      <InputsContainer>
        <label>Filtro</label>
        <select value={filtro} onChange={onChangeFilter}>
          <option value="">Nenhum</option>
          <option value="pendentes">Pendentes</option>
          <option value="completas">Completas</option>
        </select>
      </InputsContainer>
      <TarefaList>
        {listaFiltrada.map((tarefa, indice) => {
          return (
            <Tarefa
              key={indice}
              completa={tarefa.completa}
              onClick={() => selectTarefa(tarefa.id)}
            >
              {tarefa.texto}
            </Tarefa>
          );
        })}
      </TarefaList>
    </Container>
  );
}

export default App;
