import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MainPage from "./Components/MainPage/MainPage";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function App() {
  return (
    <>
      <GlobalStyled />
      <Container>
        <Header />
        <MainPage />
        <Footer />
      </Container>
    </>
  );
}

export default App;
