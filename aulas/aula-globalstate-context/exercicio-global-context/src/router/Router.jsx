import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Details } from "../pages/details/Details";
import { Home } from "../pages/home/Home";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details" element={<Details />} />
            </Routes>
        </BrowserRouter>
    )
}