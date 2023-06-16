import { Card } from './components/card/Card';
import { Header } from './components/header/Header';
import { DetailsPage } from './pages/detailsPage/DetailsPage';
import { HomePage } from './pages/homepage/HomePage';
import { data } from './data/data'
import { useState } from 'react';

function App() {
  const [characters, setCharacters] = useState(data)

  const addCharacter = () => {
    const newCharacter = {
      "id": 20,
      "name": "Teste",
      "species": "Human",
      "origin": {
        "name": "Earth (C-137)"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/20.jpeg"
    }

    const newCharactersList = [...characters, newCharacter]
    setCharacters(newCharactersList)
  }

  return (
    <div>
      <HomePage characters={characters} />
      <button onClick={addCharacter}>Add Person</button>
    </div>
  );
}

export default App;
