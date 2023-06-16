import { Card } from './components/card/Card';
import { Header } from './components/header/Header';
import { DetailsPage } from './pages/detailsPage/DetailsPage';
import { HomePage } from './pages/homepage/HomePage';
import { data } from './data/data'
import { useState } from 'react';

function App() {
  const [characters, setCharacters] = useState(data)
  const [image, setImage] = useState("")
  const [name, setName] = useState("")
  const [specie, setSpecie] = useState("")

  const addCharacter = () => {
    const newCharacter = {
      id: Date.now(),
      name,
      specie,
      origin: {
        name: "Earth (C-137)"
      },
      image
    }

    const newCharactersList = [...characters, newCharacter]
    setCharacters(newCharactersList)
  }

  const handleName = (e) => setName(e.target.value)
  const handleImage = (e) => setImage(e.target.value)
  const handleSpecie = (e) => setSpecie(e.target.value)

  return (
    <div>
      <HomePage
        characters={characters} 
        states={{ image, name, specie }}
        handlers={{handleImage, handleName, handleSpecie}}
      />
      <button onClick={addCharacter}>Add Person</button>
    </div>
  );
}

export default App;
