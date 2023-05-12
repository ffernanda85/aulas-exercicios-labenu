import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home-page";
import { InstructionPage } from "../pages/instruction-page"
import { CreateCharacterPage } from "../pages/create-character";
import { CharacterPage } from "../pages/character-page"
import { PlanetPage } from "../pages/planet-page";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/instruction" element={<InstructionPage />} />
                <Route path="/character" element={<CharacterPage />} />
                <Route path="/create-character" element={<CreateCharacterPage />} />
                <Route path="/planet" element={<PlanetPage/>} />
            </Routes>
        </BrowserRouter>
    )
}