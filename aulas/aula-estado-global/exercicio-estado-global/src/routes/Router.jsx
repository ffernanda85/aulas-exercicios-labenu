import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BASE_URL } from "../constants/url";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";

function Router() {
  const [pokelist, setPokelist] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    fetchPokelist();
  }, []);

  const fetchPokelist = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setPokelist(response.data.results);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error.response);
    }
  };

  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
    }
  };

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );

    setPokedex(newPokedex);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              pokelist={pokelist}
              addToPokedex={addToPokedex}
              pokedex={pokedex}
            />
          }
        />
        <Route
          path="/pokedex"
          element={
            <PokedexPage
              pokedex={pokedex}
              removeFromPokedex={removeFromPokedex}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
