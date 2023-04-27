import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";
import { GlobalContext } from "./GlobalContext";


export const GlobalState = (props) => {

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

    const data = {
        pokedex,
        pokelist,
        removeFromPokedex,
        addToPokedex
    }

    return (
        <GlobalContext.Provider value={data}>
            {props.children}
        </GlobalContext.Provider>
    )
}