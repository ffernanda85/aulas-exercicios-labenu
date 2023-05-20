import { Nav } from "../nav/Nav";
import { Section } from "../section/Section";
import { Container } from "./styledMain";
import { CardVideo } from "../cardvideo/CardVideo";

export function Main() {
    
    const video1 = {
        imagem: <img src="https://picsum.photos/400/400?a=1" alt="" />,
        titulo: "Filme 1",
        imagemInfo: <img src="https://picsum.photos/400/400?a=9" />
      }
    
      const video2 = {
        imagem: <img src="https://picsum.photos/400/400?a=2" alt="" />,
        titulo: "Filme 2",
        imagemInfo: <img src="https://picsum.photos/400/400?a=10" />
    
      }
    
      const video3 = {
        imagem: <img src="https://picsum.photos/400/400?a=3" alt="" />,
        titulo: "Filme 3",
        imagemInfo: <img src="https://picsum.photos/400/400?a=11" />
      }
    
      const video4 = {
        imagem: <img src="https://picsum.photos/400/400?a=4" alt="" />,
        titulo: "Filme 4",
        imagemInfo: <img src="https://picsum.photos/400/400?a=12" />
      }
    
      const video5 = {
        imagem: <img src="https://picsum.photos/400/400?a=5" alt="" />,
        titulo: "Filme 5",
        imagemInfo: <img src="https://picsum.photos/400/400?a=13" />
      }
    
      const video6 = {
        imagem: <img src="https://picsum.photos/400/400?a=6" alt="" />,
        titulo: "Filme 6",
        imagemInfo: <img src="https://picsum.photos/400/400?a=14" />
    
      }
    
      const video7 = {
        imagem: <img src="https://picsum.photos/400/400?a=7" alt="" />,
        titulo: "Filme 7",
        imagemInfo: <img src="https://picsum.photos/400/400?a=15" />
      }
    
      const video8 = {
        imagem: <img src="https://picsum.photos/400/400?a=8" alt="" />,
        titulo: "Filme 8",
        imagemInfo: <img src="https://picsum.photos/400/400?a=16" />
      }
    
    return (
        <Container>
          <Nav/>
        <Section
          video1={video1}
          video2={video2}
          video3={video3}
          video4={video4}
          video5={video5}
          video6={video6}
          video7={video7}
          video8={video8}
        /> 
        </Container>
    )
}