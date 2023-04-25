import { useId, useState } from 'react'
import { Data } from './components/data/Data'
import { Card } from './components/card/Card'
import "./App.css"

function App() {

  const [movie, setMovie] = useState(Data)

  function changeState(event) {
    const codeMovie = +event.currentTarget.id
    const copy = [...movie]
    const confirm = !copy[codeMovie - 1].available

    copy[codeMovie - 1].available = confirm
    
    setMovie(copy)
  }

  return (
    <div>
      <header>
        <h1>Locadora de Filmes!</h1>
      </header>

      <main>
        <section>
          <h3>Todos os Filmes</h3>
          <div className='container'>
            {
              movie.map(item => 
                <Card
                  key={useId()}
                  item={item} />  
                )
            }
          </div>
        </section>
        
        <section>
          <h3>Filmes Disponiveis para locação</h3>
          <div className='available'>
            {
              movie.filter(item =>
                item.available).map(item =>
                  <Card
                    key={useId()}
                    item={item}
                    changeState={(event)=>changeState(event)}
                  />)
            }
          </div>
        </section>

        <section>
          <h3>Filmes Alugados</h3>
          <div className='available'>
            {
              movie.filter(item =>
                !item.available).map(item =>
                  <Card
                    changeState={(event)=>changeState(event)}
                    item={item}
                    key={useId()}
                  />)
            }
          </div>
        </section>
      </main>

    </div>
  )
}

export default App
