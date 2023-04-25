import React from "react";
import { Title, NameContainer, PostContainer } from './style'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './components/Header/Header'
import { Card } from './components/Card/Card'
import { useRequestData } from "./hooks/useRequestData";
import { BASE_URL, BASE_URL_02 } from "./constants/constants";

function App() {
  /* const nomeUsuarios = useCapturarNome()
  const postagens = useCapturarPostagem() */
  const [nomeUsuarios, isLoadingNomes, isErrorNome] = useRequestData(`${BASE_URL_02}students`, [])
  const [postagens, isLoadingPostagens, isErrorPostagem] = useRequestData(`${BASE_URL}comments`, [])

  const renderNomes = nomeUsuarios.map((usuario) => {
    return (
      <Card
        key={usuario.id}
        text={usuario.name}
        backgroudColor={'nome'}
        textColor={'nome'}
        image={usuario.image}
      />)
  })

  const renderPostagens = postagens.map((post) => {
    //console.log(post);
    return (
      <Card
        key={post.id}
        text={post.body}
        backgroudColor={'#1dc690'}
        textColor={'#ffffff'}
      />)
  })

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Title>Nomes dos usuários</Title>
      <NameContainer>
        {isLoadingNomes && <p>Carregando Nomes...</p>}
        {!isLoadingNomes && isErrorNome && <p>Ocorreu um erro!</p> }
        {!isLoadingNomes && !isErrorNome && nomeUsuarios && nomeUsuarios.length > 0 && renderNomes}
        {!isLoadingNomes && !isErrorNome && nomeUsuarios && nomeUsuarios.length === 0 && <p>Lista Vazia</p>}
      </NameContainer>

      <hr />
      <Title>Comentários dos usuários</Title>
      <PostContainer>
        {isLoadingPostagens && <p>Carregando Postagens...</p>}
        {!isLoadingPostagens && isErrorPostagem && <p>Ocorreu um erro!</p> }
        {!isLoadingPostagens && !isErrorPostagem && postagens && postagens.length > 0 && renderPostagens}
        {!isLoadingPostagens && !isErrorPostagem && postagens && postagens.length === 0 && <p>Lista de Postagens Vazia</p>}
      </PostContainer>
    </div>
  );
}

export default App;



