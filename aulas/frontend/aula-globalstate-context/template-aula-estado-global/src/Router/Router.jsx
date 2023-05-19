import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mercadinho from "../Pages/Mercadinho";
import Carrinho from "../Pages/Carrinho";
import Cadastro from "../Pages/Cadastro";
import frutaria from "../data/frutaria.json"

export default function Router() {
  const [carrinho, setCarrinho] = useState([])
  const [frutas, setFrutas] = useState(frutaria.frutaria)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Mercadinho
            carrinho={carrinho}
            setCarrinho={setCarrinho}
            frutas={frutas}
            setFrutas={setFrutas}
          />}
        />

        <Route
          path="/cart"
          element={<Carrinho
            carrinho={carrinho}
            setCarrinho={setCarrinho}
          />}
        />

        <Route
          path="/cadastro"
          element={<Cadastro
            carrinho={carrinho}
            setCarrinho={setCarrinho}
            frutas={frutas}
            setFrutas={setFrutas}
          />}
        />
      </Routes>
    </BrowserRouter>
  );
}
